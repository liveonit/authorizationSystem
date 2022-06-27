import { useUserSession } from '@graphql/cache/userState';
import React from 'react';

interface IProps {
  [key: string]: any;
}

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const user = useUserSession();
  if (!user.accessToken && !user.refreshToken) {
    console.log('Just for test');
  }
  return children;
};
