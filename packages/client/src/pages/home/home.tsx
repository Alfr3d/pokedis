import React, {Fragment, useEffect, useState} from 'react';
import { gql, useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import Loading from '../../components/loading/loading';
import './_home.scss';
import PokemonDetail from "../../components/pokemon-detail/pokemon-detail";
import {Row, Col, Space, Typography, Alert} from 'antd';
import PokemonsPageInfo from "./pokemons-page-info";

const { Title } = Typography;
const GET_ALL_POKEMONS = loader('../../graphql/constants/allPokemons.graphql');

interface IHomeProps {
  after?: string;
  first: number;
  setPageInfo(hasNextPage: boolean, endCursor?: string): void;
}

export const Home: React.FC<IHomeProps> = ({ after, first, setPageInfo }) => {
  const [nodes, setItem] = useState();
  const { loading, error, data, refetch } = useQuery(GET_ALL_POKEMONS, {
    variables: { after, first }
  });

  useEffect(() => {
    if( data ) {
      // @ts-ignore
      const nodes = data?.pokemons?.edges.map(edge => edge.node);
      console.log(nodes);
      setItem(nodes);
    }
  }, [data]);
  if (loading) return <Loading />;
  if (error) return <Alert message="Error" type="error" />;

  // @ts-ignore
  const listItems = nodes?.map((d) =>
    <Col xs={24} lg={8}>
      <PokemonDetail key={d.ID} ID={d.ID} name={d.name} types={d.types} classification={d.classification} />
    </Col>
  );

  return (
    <Fragment>
      <Title level={3}>All Pokemons</Title>
      <Row gutter={16}>
        <div>
          <PokemonsPageInfo
            endCursor={data?.pokemons?.pageInfo.endCursor}
            hasNextPage={data?.pokemons?.pageInfo.hasNextPage}
            setPageInfo={setPageInfo}
          />
          {listItems}
        </div>
      </Row>
    </Fragment>
  );
};

export default Home;
