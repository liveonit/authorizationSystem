import React from "react";
import { Route, Routes } from "react-router-dom";
import { CustomRouter } from "../utils/Router/CustomRouter";
import history from "../utils/Router/history";


import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql";
import Layout from "../Layout";
import Home from "./Home";
import Bookstore from "./Bookstore";
import UsersAdmin from "./UsersAdmin";


const  Root: React.FC = () => {
  return (

      <ApolloProvider client={client}>
        <CustomRouter history={history}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/bookstore" element={<Bookstore/>} />
              <Route path="/usersadmin" element={<UsersAdmin/>} />
            </Routes>
          </Layout>
        </CustomRouter>
      </ApolloProvider>
  );
}

export default Root;
