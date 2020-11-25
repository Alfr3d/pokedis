import React from 'react';
import './App.scss';
import Home from "./pages/home/home";
import SearchPage from "./pages/search-page/search-page";
import { ApolloProvider } from '@apollo/client';
import ClientConnector from './graphql/client-connector';
import Layout from "./containers/layout";
import {
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <ApolloProvider client={ClientConnector}>
      <Layout>
        <Switch>
          <Route path="/about">
            about
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
