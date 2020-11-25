import React, { Fragment, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import Loading from '../../components/loading/loading';
import './_home.scss';
import PokemonDetail from "../../components/pokemon-detail/pokemon-detail";
import { Row, Col, Space } from 'antd';

const allPokemon = loader('../../graphql/constants/allPokemons.graphql');
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
    const listItems = nodes.map((d) =>
        <Col span={8}>
          <Space size="middle">
            <PokemonDetail key={d.ID} ID={d.ID} name={d.name} types={d.types} classification={d.classification} />
          </Space>
        </Col>
    );
    console.log(listItems);

    return (
      <Fragment>
          <Row>
              {listItems}
          </Row>
      </Fragment>
    );
};

export default Home;
