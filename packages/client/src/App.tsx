import React from 'react';
import './App.scss';
import { ApolloProvider } from '@apollo/client';
import ClientConnector from './graphql/client-connector';
import Layout from "./containers/layout";
import {
  Switch,
  Route
} from 'react-router-dom';
import PokemonSearch from "./components/pokemon-search/pokemon-search";
import About from "./pages/about/about";
import Pagination from "./pages/home/pagination";

function App() {
  return (
    <ApolloProvider client={ClientConnector}>
      <Layout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/search/name">
            <PokemonSearch by="name" />
          </Route>
          <Route path="/search/type">
            <PokemonSearch by="type" />
          </Route>
          <Route path="/">
            <Pagination />
          </Route>
        </Switch>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
