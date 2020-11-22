import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Loader from "./components/Loader/Loader";
import { ApolloProvider } from '@apollo/client';
import client from './graphql/Client'

function App() {
  return (
    <ApolloProvider client={client}>
      <Loader></Loader>
    </ApolloProvider>
  );
}

export default App;
