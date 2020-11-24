import React from 'react';
import logo from './logo.svg';
import './App.scss';
import PokemonSearch from "./components/pokemon-search/pokemon-search";
import Home from "./pages/home";
import { ApolloProvider } from '@apollo/client';
import ClientConnector from './graphql/client-connector';

function App() {
  return (
    <ApolloProvider client={ClientConnector}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
