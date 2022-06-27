import { useUserSession } from '@graphql/cache/userState';
import history from '@utils/Router/history';
import React from 'react';

interface IProps {
  [key: string]: any;
}

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const user = useUserSession();
  if (!user.accessToken && !user.refreshToken) {
    history.push('/login');
  }
  return children;
};
