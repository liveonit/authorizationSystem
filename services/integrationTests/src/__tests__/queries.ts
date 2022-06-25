import { gql } from 'graphql-request';

export const clearDb = gql`
  mutation clearDb {
    clearDb
  }
`;

export const login = gql`
  mutation login($userId: String!, $password: String!) {
    login(data: { id: $userId, password: $password }) {
      id
      token
      roles {
        name
      }
    }
  }
`;

export const ingresarJuntas = gql`
  mutation ingresarJuntasDepartamentales($juntas: [CreateJuntaDepartamentalInput!]!) {
    ingresarJuntasDepartamentales(data: $juntas) {
      id
      departamento
      direccion
    }
  }
`;

export const ingresarMunicipios = gql`
  mutation ingresarMunicipios($municipios: [CreateMunicipioInput!]!) {
    ingresarMunicipios(data: $municipios) {
      id
      direccion
      nombre
      juntaDepartamental {
        id
        direccion
      }
    }
  }
`;

export const listarVotantesDelCircuito = gql`
  query listarVotantes {
    getVotantesDelCircuito {
      id
      direccion
      votantes {
        nombres
        apellidos
        credencial
        votacionHabilitada
        votacionRealizada
      }
    }
  }
`;

export const ingresarCircuitos = gql`
  mutation ingresarCircuitos($circuitos: [CreateCircuitoInput!]!) {
    ingresarCircuitos(data: $circuitos) {
      id
      direccion
      municipio {
        id
        direccion
      }
    }
  }
`;

export const ingresarEquipamientos = gql`
  mutation ingresarCircuitos($equipos: [CreateEquipamientoInput!]!) {
    ingresarEquipamientos(data: $equipos) {
      serie
      juntaDepartamental {
        id
        direccion
      }
      circuito {
        id
        direccion
      }
    }
  }
`;

export const ingresarVotantes = gql`
  mutation ingresarVotantes($votantes: [CreateVotanteInput!]!) {
    ingresarVotantes(data: $votantes) {
      credencial
      circuito {
        id
        direccion
      }
      nombres
      apellidos
    }
  }
`;

export const ingresarUsuarios = gql`
  mutation ingresarUsers($users: [CreateUserInput!]!) {
    ingresarUsers(data: $users) {
      id
      roles {
        name
      }
    }
  }
`;

export const ingresarListas = gql`
  mutation insertListas($listas: [CreateListaInput!]!) {
    ingresarListas(data: $listas) {
      id
      lema
      sublema
    }
  }
`;

export const getListas = gql`
  query getListas {
    getListas {
      id
      lema
      sublema
      listaIntegrantes {
        votante {
          nombres
          apellidos
        }
      }
    }
  }
`;

export const getMyProfile = gql`
  query getMyProfile {
    getMyProfile {
      credencial
      circuito {
        id
        direccion
        publicKey
      }
      nombres
      apellidos
      votacionHabilitada
      votacionRealizada
    }
  }
`;

export const votar = gql`
  mutation votar($voto: String!) {
    votar(data: $voto) {
      credencial
      circuito {
        id
        direccion
      }
      nombres
      apellidos
      votacionHabilitada
      votacionRealizada
    }
  }
`;

export const habilitarVotante = gql`
  mutation habilitarVotante($credencial: String!) {
    habilitarVotante(data: $credencial) {
      credencial
      votacionHabilitada
      nombres
      apellidos
    }
  }
`;

export const listarVotantes = gql`
  query listarVotantes {
    getAllVotantes {
      credencial
      circuito {
        id
        direccion
        publicKey
      }
      nombres
      apellidos
    }
  }
`;

export const listarUsuarios = gql`
  query listarUsuarios {
    listarUsuarios {
      id
      roles {
        name
      }
    }
  }
`;

export const escrutinio = gql`
mutation escrutinio($privateKey: String!) {
  escrutinio(data: $privateKey) {
      id
      sufragios {
          voto
      }
  }
}
`
