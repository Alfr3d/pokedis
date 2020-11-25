import React, { Fragment, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import Loading from '../../components/loading/loading';
import './_search-page.scss';
import { Row, Col, Space } from 'antd';
import PokemonDetail from "../../components/pokemon-detail/pokemon-detail";
import PokemonSearch from "../../components/pokemon-search/pokemon-search";

const allPokemon = loader('../../graphql/constants/allPokemons.graphql');
const SearchPage = () => {

  return (
    <Fragment>
      <PokemonSearch/>
    </Fragment>
  );
};

export default SearchPage;
