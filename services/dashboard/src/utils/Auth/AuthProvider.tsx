import { useUserSession } from '@graphql/cache/userState';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface IProps {
  [key: string]: any;
}

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const user = useUserSession();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/login' && !user.accessToken && !user.refreshToken) {
      navigate('/login', { replace: true });
    }
  }, [user.accessToken, user.refreshToken]);
  return children;
};
