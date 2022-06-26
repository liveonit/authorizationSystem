import { useReactiveVar } from '@apollo/client';
import { Role, UserSession } from '@gqlauto/schemas';
import { parseJwt } from '@utils/general/parseJwt';
import ReactiveStoreVar from '../helpers';

interface UserSessionPayload {
  id: string;
  username: string;
  enabled: boolean;
  emailVerified: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  roles?: Role[];
}

export const userState = new ReactiveStoreVar<UserSession>({
  varName: 'userState',
  initialState: {
    id: null,
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
  if (session.refreshToken) return parseJwt<UserSessionPayload>(session.refreshToken);
  if (session.accessToken) return parseJwt<UserSessionPayload>(session.accessToken);
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
  if (session.refreshToken) return parseJwt<UserSessionPayload>(session.refreshToken);
  if (session.accessToken) return parseJwt<UserSessionPayload>(session.accessToken);
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
