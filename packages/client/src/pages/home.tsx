import React, { Fragment, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import Loading from '../components/loading/loading';
import './_home.scss';
import PokemonDetail from "../components/pokemon-detail/pokemon-detail";

const allPokemon = loader('../graphql/constants/allPokemons.graphql');

const Home = () => {
    const {
        data,
        loading,
        fetchMore,
    } = useQuery(allPokemon);

    if (loading) return <Loading />;

    // @ts-ignore
    const nodes = data.pokemons.edges.map(edge => edge.node);
    console.log(nodes);
    // @ts-ignore
    const listItems = nodes.map((d) => <PokemonDetail key={d.ID} name={d.name} types={d.types}></PokemonDetail>)
    console.log(listItems);

    return (
      <div>
          {listItems}
      </div>
    );
};

export default Home;
