import { useReactiveVar } from '@apollo/client';
import { Role, UserSession } from '@gqlauto/schemas';
import { parseJwt } from '@utils/general/parseJwt';
import ReactiveStoreVar from '../helpers';

export interface UserSessionPayload {
  id: string | null;
  username: string | null;
  enabled: boolean | null;
  emailVerified: boolean | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  roles?: Role[] | null;
  exp?: number;
  iat?: number;
}

export const userState = new ReactiveStoreVar<UserSession>({
  varName: 'userState',
  initialState: {
    id: '',
    accessToken: null,
    refreshToken: null,
  },
  persist: true,
  debug: true,
  loadOnMount: true,
});

export const useUserSession = () => {
  return useReactiveVar(userState.reactiveVar);
};

export const useUserState = () => {
  const session = useReactiveVar(userState.reactiveVar);
  if (session.accessToken?.length) return parseJwt<UserSessionPayload>(session.accessToken);
  if (session.refreshToken?.length) return parseJwt<UserSessionPayload>(session.refreshToken);
  return {
    id: null,
    username: null,
    enabled: null,
    emailVerified: null,
    firstName: null,
    lastName: null,
    email: null,
    roles: null,
  } as UserSessionPayload;
};

export const getUser = () => {
  const session = userState.get();
  if (session.refreshToken?.length) return parseJwt<UserSessionPayload>(session.refreshToken);
  if (session.accessToken?.length) return parseJwt<UserSessionPayload>(session.accessToken);
  return {
    id: null,
    username: null,
    enabled: null,
    emailVerified: null,
    firstName: null,
    lastName: null,
    email: null,
    roles: null,
  } as UserSessionPayload;
};
