import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CustomRouter } from '../utils/Router/CustomRouter';
import history from '../utils/Router/history';

import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql';
import Layout from '../Layout';
import Home from './Home';
import Bookstore from './Bookstore';
import UsersAdmin from './UsersAdmin';
import { CustomLoginPage } from './Login';
import { useUserSession } from '@graphql/cache/userState';

const Root: React.FC = () => {
  const user = useUserSession();
  const sessionRequired = !user.accessToken && !user.refreshToken;
  return (
    <ApolloProvider client={client}>
      <CustomRouter history={history}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={sessionRequired ? <Navigate to="/login" replace /> : <Home />}
            />
            <Route path="/login" element={<CustomLoginPage />} />
            <Route path="/bookstore" element={<Bookstore />} />
            <Route path="/usersadmin" element={<UsersAdmin />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Page not found!</p>
                </main>
              }
            />
            ˝
          </Routes>
        </Layout>
      </CustomRouter>
    </ApolloProvider>
  );
};

export default Root;
