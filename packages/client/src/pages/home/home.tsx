import React, { Fragment, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import Loading from '../../components/loading/loading';
import './_home.scss';
import PokemonDetail from "../../components/pokemon-detail/pokemon-detail";
import { Row, Col, Space, Typography } from 'antd';

const { Title } = Typography;
const GET_ALL_POKEMONS = loader('../../graphql/constants/allPokemons.graphql');
const Home = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_POKEMONS);

  if (loading) return <Loading />;

  // @ts-ignore
    const nodes = data.pokemons.edges.map(edge => edge.node);
    console.log(nodes);
    // @ts-ignore
    const listItems = nodes.map((d) =>
        <Col xs={24} lg={8}>
          <PokemonDetail key={d.ID} ID={d.ID} name={d.name} types={d.types} classification={d.classification} />
        </Col>
    );
    console.log(listItems);

    return (
      <Fragment>
        <Title level={3}>All Pokemons</Title>
        <Row gutter={16}>
          {listItems}
        </Row>
      </Fragment>
    );
};

export default Home;
