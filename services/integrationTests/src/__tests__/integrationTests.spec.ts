import { GraphQLClient } from 'graphql-request';
import * as queries from './queries';
import * as variables from './variables';

export const API_URL = 'http://localhost/graphql';

const client = new GraphQLClient(API_URL);

describe('All tests', () => {
  beforeAll(async () => {
    const { login } = await client.request(queries.login, {
      userId: 'admin@corteelectoral.gub.uy',
      password: 'S1st3m4s.D1str1bu1d0s',
    });
    const result = await client.request(queries.clearDb, undefined, {
      authorization: `Bearer ${login.token}`,
    });
  });

  test('Login debe fallar con credenciales incorrectas', (doneCb) => {
    client
      .request(queries.login, {
        userId: 'admin@corteelectoral.gub.uy',
        password: 'wrongPassword',
      })
      .catch((err) => {
        expect(err).toBeDefined();
        expect(err.response.errors[0].message).toEqual('Invalid Credentials');
        doneCb();
      });
  });

  test('Login autentica correctamente', async () => {
    const result = await client.request(queries.login, {
      userId: 'admin@corteelectoral.gub.uy',
      password: 'S1st3m4s.D1str1bu1d0s',
    });
    expect(result.login.id).toEqual('admin@corteelectoral.gub.uy');
    expect(result.login.token).toBeDefined();
    expect(result.login.roles.filter((r: any) => r.name === 'corteElectoral')).toHaveLength(1);
  });

  describe('Test insert data', () => {
    let headers: any = {};

    beforeAll(async () => {
      const { login } = await client.request(queries.login, {
        userId: 'admin@corteelectoral.gub.uy',
        password: 'S1st3m4s.D1str1bu1d0s',
      });
      headers = {
        authorization: `Bearer ${login.token}`,
      };
    });

    test('Crear juntas departamentales debe ingresar los datos correctamente', async () => {
      const result = await client.request(
        queries.ingresarJuntas,
        variables.ingresarJuntasInput,
        headers,
      );
      expect(result).toBeDefined();
      expect(result.ingresarJuntasDepartamentales).toHaveLength(2);
      expect(result.ingresarJuntasDepartamentales.map((jd: any) => jd.id)).toEqual([
        'b9480e45-af84-4714-9639-a162cb1bdf56',
        'ddeea85e-a576-4484-bc0e-1191b811c42d',
      ]);
    });

    test('Crear municipios debe ingresar los datos correctamente', async () => {
      const result = await client.request(
        queries.ingresarMunicipios,
        variables.ingresarMunicipiosInput,
        headers,
      );
      expect(result).toBeDefined();
      expect(result.ingresarMunicipios).toHaveLength(5);
      expect(
        result.ingresarMunicipios.filter((m: any) =>
          ['80f9343a-946a-493a-8a17-4664f2d959e3', 'fadc3b65-6393-4cf6-85f3-f74ecfc9f3fd'].includes(
            m.id,
          ),
        ),
      ).toHaveLength(2);
    });

    test('Crear circuitos debe ingresar los datos correctamente', async () => {
      const result = await client.request(
        queries.ingresarCircuitos,
        variables.ingresarCircuitosInput,
        headers,
      );
      expect(result).toBeDefined();
      expect(result.ingresarCircuitos).toHaveLength(20);
      expect(
        result.ingresarCircuitos.filter((m: any) => [97304, 17530].includes(m.id)),
      ).toHaveLength(2);
    });

    test('Crear equipos debe ingresar los datos correctamente', async () => {
      const result = await client.request(
        queries.ingresarEquipamientos,
        variables.ingresarEquiposInput,
        headers,
      );
      expect(result).toBeDefined();
      expect(result.ingresarEquipamientos).toHaveLength(62);
      expect(
        result.ingresarEquipamientos.filter((m: any) =>
          ['9373d2b9-cd77-464f-84db-d6b7c005020b', 'fe75208e-d471-4f5e-bb0a-ac92964a2d6d'].includes(
            m.serie,
          ),
        ),
      ).toHaveLength(2);
    });

    test('Crear votantes debe ingresar los datos correctamente', async () => {
      const result = await client.request(
        queries.ingresarVotantes,
        variables.ingresarVotantesInput,
        headers,
      );
      expect(result).toBeDefined();
      expect(result.ingresarVotantes).toHaveLength(215);
      expect(
        result.ingresarVotantes.filter((m: any) =>
          ['PXMZGF23231', 'HKVCEO43650'].includes(m.credencial),
        ),
      ).toHaveLength(2);
    });

    test('Crear usuarios debe ingresar los datos correctamente', async () => {
      const result = await client.request(
        queries.ingresarUsuarios,
        variables.ingresarUsuariosInput,
        headers,
      );
      expect(result).toBeDefined();
      expect(result.ingresarUsers).toHaveLength(215);
      expect(
        result.ingresarUsers.filter((m: any) => ['PXMZGF23231', 'HKVCEO43650'].includes(m.id)),
      ).toHaveLength(2);
    });

    test('Crear listas debe ingresar los datos correctamente', async () => {
      const result = await client.request(
        queries.ingresarListas,
        variables.ingresarListasInput,
        headers,
      );
      expect(result).toBeDefined();
      expect(result.ingresarListas).toHaveLength(20);
      expect(result.ingresarListas.filter((m: any) => [70860, 84739].includes(m.id))).toHaveLength(
        2,
      );
    });
  });

  test('Fallo por permisos incorrectos', (doneCb) => {
    client
      .request(queries.login, {
        userId: 'XDOQGR21630',
        password: 'Q1w2e3r4t5.',
      })
      .then(({ login }) => {
        client
          .request(queries.listarVotantesDelCircuito, undefined, {
            authorization: `Bearer ${login.token}`,
          })
          .catch((err) => {
            expect(err.response.errors[0].message).toBe('Invalid Permissions');
            doneCb();
          });
      });
  });

  test('Fallo por votacion no habilitada', (doneCb) => {
    client
      .request(queries.login, {
        userId: 'XDOQGR21630',
        password: 'Q1w2e3r4t5.',
      })
      .then(({ login }) => {
        client
          .request(
            queries.votar,
            { voto: 'unVoto' },
            {
              authorization: `Bearer ${login.token}`,
            },
          )
          .catch((err) => {
            expect(err).toBeDefined();
            expect(err.response.errors[0].message).toBe('Votante no habilitado para votar');
            doneCb();
          });
      });
  });

  test('Votaciones recurrentes, solo inserta un voto, las demas deben fallar', async () => {
    const funcionarioLogin = await client.request(queries.login, {
      userId: 'DYLEEL34097',
      password: 'Q1w2e3r4t5.',
    });
    const randallLogin = await client.request(queries.login, {
      userId: 'XDOQGR21630',
      password: 'Q1w2e3r4t5.',
    });
    const habilitacionResult = await client.request(
      queries.habilitarVotante,
      { credencial: 'XDOQGR21630' },
      {
        authorization: `Bearer ${funcionarioLogin.login.token}`,
      },
    );

    const result = await Promise.allSettled(
      [1, 2, 3].map(async (i) =>
        client.request(
          queries.votar,
          { voto: '1234' },
          {
            authorization: `Bearer ${randallLogin.login.token}`,
          },
        ),
      ),
    );

    expect(result.filter((r: any) => r.status === 'rejected')).toHaveLength(2);
    expect(result.filter((r: any) => r.status === 'fulfilled')).toHaveLength(1);
    expect(
      (result.filter((r: any) => r.status === 'fulfilled')[0] as any).value.votar
        .votacionHabilitada,
    ).toBeFalsy();
    expect(
      (result.filter((r: any) => r.status === 'fulfilled')[0] as any).value.votar.votacionRealizada,
    ).toBeTruthy();
  });

});
