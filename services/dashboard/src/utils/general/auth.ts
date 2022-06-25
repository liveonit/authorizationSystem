import { String } from "lodash";

export interface IUser {
  name: string;
}

// FIXME: add user connection

export const getToken = (): string => {
  return '';
}

export const updateToken = async (seconds: number) => {
  console.log("");
}

export const logout = () => {
  window.k.logout();
}

export const getUserRoles = (): String[] => {
  console.log("laksjddaslkj");
  return [];
}


export const getUserInfo = (): IUser => {
  return { name: "aslkjdh"}
}
