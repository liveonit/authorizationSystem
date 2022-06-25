import faker from '@faker-js/faker';
import { GraphQLClient } from 'graphql-request';
import _, { Dictionary } from 'lodash';
import { rsaEncrypt } from '../helpers/rsaHelpers';
import * as queries from './queries';
import * as variables from './variables';
import fs from 'fs';
import path from 'path';
export const API_URL = 'http://localhost/graphql';

const client = new GraphQLClient(API_URL);
describe('Complete authorization', () => {
  jest.setTimeout(30000);
  let votantesWithRolesByCircuit: Dictionary<any[]>;
  let listas: any[];
  let votantes: any[];
  const countTotalVotes: {
    [key: string]: number;
  } = {};
  beforeAll(async () => {
    const { login } = await client.request(queries.login, {
      userId: 'admin@corteelectoral.gub.uy',
      password: 'S1st3m4s.D1str1bu1d0s',
    });
    const headers = {
      authorization: `Bearer ${login.token}`,
    };
    await client.request(queries.clearDb, undefined, headers);
    await client.request(queries.ingresarJuntas, variables.ingresarJuntasInput, headers);
    await client.request(queries.ingresarMunicipios, variables.ingresarMunicipiosInput, headers);
    await client.request(queries.ingresarCircuitos, variables.ingresarCircuitosInput, headers);
    await client.request(queries.ingresarEquipamientos, variables.ingresarEquiposInput, headers);
    await client.request(queries.ingresarVotantes, variables.ingresarVotantesInput, headers);
    await client.request(queries.ingresarUsuarios, variables.ingresarUsuariosInput, headers);
    await client.request(queries.ingresarListas, variables.ingresarListasInput, headers);
    listas = (await client.request(queries.getListas, undefined, headers)).getListas;
    listas.forEach((l) => (countTotalVotes[l.id] = 0));
    votantes = (await client.request(queries.listarVotantes, undefined, headers)).getAllVotantes;
    const usuarios = (await client.request(queries.listarUsuarios, undefined, headers))
      .listarUsuarios;
    const votantesWithRoles = _.values(
      _.merge(_.keyBy(votantes, 'credencial'), _.keyBy(usuarios, 'id')),
    ).filter((v) => v.circuito?.id);
    votantesWithRolesByCircuit = _.groupBy(votantesWithRoles, (v) => v.circuito.id);
  });

  describe('Hacer todas las votaciones y el escrutinio debe tener la cantidad exacta de votos en cada lista', () => {
    test('Hacer todas las votaciones debe funcionar bien', async () => {
      await Promise.all(
        Object.entries(votantesWithRolesByCircuit).map(
          async ([_circuito, votantes]: [circuito: string, votantes: any[]]) => {
            const funcionario = votantes.find((v) =>
              v.roles.find((r: any) => r.name === 'funcionario'),
            );
            const { login } = await client.request(queries.login, {
              userId: funcionario.credencial,
              password: 'Q1w2e3r4t5.',
            });
            for (let votante of votantes) {
              await client.request(
                queries.habilitarVotante,
                { credencial: votante.credencial },
                {
                  authorization: `Bearer ${login.token}`,
                },
              );
              const votanteLogin = await client.request(queries.login, {
                userId: votante.credencial,
                password: 'Q1w2e3r4t5.',
              });
              const listaId = listas[faker.datatype.number({ min: 0, max: listas.length - 1 })].id;
              countTotalVotes[listaId] += 1;
              const voto = rsaEncrypt(
                `${listaId}:${faker.datatype.uuid()}`,
                votante.circuito.publicKey,
              ).toString('base64');
              await client.request(
                queries.votar,
                {
                  voto,
                },
                {
                  authorization: `Bearer ${votanteLogin.login.token}`,
                },
              );
            }
          },
        ),
      );
      expect(votantes.length).toEqual(Object.values(countTotalVotes).reduce((p, c) => p + c, 0));
    });
  });

  test('Hacer el escrutinio debe contar la cantidad exacta de votos para cada lista por circuito', async () => {
    let sufragios: any[] = [];
    await Promise.all(
      Object.entries(votantesWithRolesByCircuit).map(
        async ([circuito, votantes]: [circuito: string, votantes: any[]]) => {
          const funcionario = votantes.find((v) =>
            v.roles.find((r: any) => r.name === 'funcionario'),
          );
          const { login } = await client.request(queries.login, {
            userId: funcionario.credencial,
            password: 'Q1w2e3r4t5.',
          });
          const privateKey = await new Promise((res, rej) =>
            fs.readFile(
              path.resolve(__dirname, `../keys/${circuito}/${circuito}.pem`),
              (err, data) => {
                if (err) return rej(err);
                res(data.toString());
              },
            ),
          );
          sufragios.push(
            ...(
              await client.request(
                queries.escrutinio,
                { privateKey },
                {
                  authorization: `Bearer ${login.token}`,
                },
              )
            ).escrutinio.sufragios,
          );
        },
      ),
    );
    const votosEscrutados: {
      [key: string]: number;
    } = {};
    sufragios.forEach((sufragio) =>
      votosEscrutados[sufragio.voto]
        ? (votosEscrutados[sufragio.voto] += 1)
        : (votosEscrutados[sufragio.voto] = 1),
    );
    expect(countTotalVotes).toEqual(votosEscrutados);
    expect(200).toBe(200);
  });
});
