import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CustomRouter } from '../utils/Router/CustomRouter';
import history from '../utils/Router/history';

import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql';
import Layout from '../Layout';
import Home from './Home';
import Bookstore from './Bookstore';
import UsersAdmin from './UsersAdmin';
import { CustomLoginPage } from './Login';
import { AuthProvider } from '@utils/Auth/AuthProvider';

const Root: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <CustomRouter history={history}>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
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
        </AuthProvider>
      </CustomRouter>
    </ApolloProvider>
  );
};

export default Root;
