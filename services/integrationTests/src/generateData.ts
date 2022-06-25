import faker from '@faker-js/faker';
import path from 'path';
import { createRsaKeyPair } from './helpers/createRsaKeyPair';
import * as fs from 'fs';
import { randomCredential } from './helpers/randomCredential';
import _ from 'lodash';
const generateJuntasDepartamentales = (quantity: number) => {
  const juntas: any[] = [];
  for (let i = 1; i <= quantity; i++) {
    juntas.push({
      id: faker.datatype.uuid(),
      departamento: faker.address.city(),
      direccion: faker.address.streetAddress(),
    });
  }
  return juntas;
};

const generateMunicipios = (
  juntasDepartamentales: any[],
  minPorJunta: number,
  maxPorJunta: number,
) => {
  const municipios: any[] = [];

  juntasDepartamentales.forEach((junta) => {
    const cantRandom = faker.datatype.number({ min: minPorJunta, max: maxPorJunta });
    for (let i = 1; i <= cantRandom; i++)
      municipios.push({
        id: faker.datatype.uuid(),
        nombre: faker.address.state(),
        direccion: faker.address.streetAddress(),
        juntaDepartamentalId: junta.id,
      });
  });
  return municipios;
};

const generateCirtuitos = async (
  municipios: any[],
  minCircuitosPorMunicipio: number,
  maxCircuitosPorMunicipio: number,
) => {
  const circuitos: any[] = [];

  const promises = municipios.map(async (municipio) => {
    const cantRandom = faker.datatype.number({
      min: minCircuitosPorMunicipio,
      max: maxCircuitosPorMunicipio,
    });
    for (let i = 1; i <= cantRandom; i++) {
      const circuitoId = faker.datatype.number();
      const keyPair = await createRsaKeyPair(
        circuitoId.toString(),
        path.resolve(__dirname, `./keys/${circuitoId}`),
      );
      circuitos.push({
        id: circuitoId,
        publicKey: keyPair?.publicKey,
        direccion: faker.address.streetAddress(),
        municipioId: municipio.id,
      });
    }
  });
  await Promise.all(promises);
  return circuitos;
};

const generateEquipos = (circuitos: any[], juntasDepartamentales: any[]) => {
  const equipos: any[] = [];

  circuitos.forEach((circuito) => {
    equipos.push({
      serie: faker.datatype.uuid(),
      tipo: 'estacionFuncionario',
      circuitoId: circuito.id,
    });
    equipos.push({
      serie: faker.datatype.uuid(),
      tipo: 'estacionVoto',
      circuitoId: circuito.id,
    });
    equipos.push({
      serie: faker.datatype.uuid(),
      tipo: 'pendriveKey',
      circuitoId: circuito.id,
    });
  });

  juntasDepartamentales.forEach((junta) =>
    equipos.push({
      serie: faker.datatype.uuid(),
      tipo: 'pendriveKey',
      juntaDepartamentalId: junta.id,
    }),
  );
  return equipos;
};

const generateVotantes = (circuitos: any[], minPorJunta: number, maxPorJunta: number) => {
  const votantes: any[] = [];

  circuitos.forEach((circuito) => {
    const cantRandom = faker.datatype.number({ min: minPorJunta, max: maxPorJunta });
    for (let i = 1; i <= cantRandom; i++)
      votantes.push({
        credencial: randomCredential(),
        nombres: faker.name.firstName(),
        apellidos: faker.name.lastName(),
        imagen: faker.image.avatar(),
        votacionHabilitada: false,
        votacionRealizada: false,
        circuitoId: circuito.id,
      });
  });
  return votantes;
};

const generateUsers = (votantes: any[]) => {
  const votantesPorCircuito = _.groupBy(votantes, (v) => v.circuitoId);
  const usuarios: any[] = [];
  Object.values(votantesPorCircuito).forEach((votantesPorCircuito) => {
    votantesPorCircuito.forEach((votante, i) => {
      usuarios.push({
        id: votantesPorCircuito[i].credencial,
        password: 'Q1w2e3r4t5.',
        roles: i === 0 ? ['civil', 'funcionario'] : i === 1 ? ['civil', 'policia'] : ['civil'],
      });
    });
  });
  return usuarios;
};

const generateListas = (votantes: any[], queantity: number, integrantes: number) => {
  let votantesCopy = [...votantes];
  const listas: any[] = [];
  for (let i = 1; i <= queantity; i++) {
    const integrantes = votantes.splice(0, queantity);
    listas.push({
      id: faker.datatype.number(),
      lema: faker.company.companyName(),
      sublema: faker.company.companyName(),
      listaIntegrantesIds: integrantes.map((i) => i.credencial),
    });
  }
  return listas;
};

const main = async () => {
  const juntas = generateJuntasDepartamentales(2);
  const municipios = generateMunicipios(juntas, 2, 6);
  const circuitos = await generateCirtuitos(municipios, 2, 6);
  const equipos = generateEquipos(circuitos, juntas);
  const votantes = generateVotantes(circuitos, 20, 40);
  const users = generateUsers(votantes);
  const listas = generateListas(votantes, 20, 20);
  fs.writeFileSync(
    path.resolve(__dirname, './fakeData.json'),
    JSON.stringify({
      juntas,
      municipios,
      circuitos,
      equipos,
      votantes,
      users,
      listas,
    }),
  );
};

if (require.main === module) {
  main();
}
