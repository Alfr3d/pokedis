import React, {useEffect, useState} from "react";
import {useLazyQuery, useQuery} from "@apollo/client";
import Loading from "../loading/loading";
import {Col, Row, Space, Alert} from "antd";
import PokemonDetail from "../pokemon-detail/pokemon-detail";
import {loader} from "graphql.macro";

const GET_POKEMONS_BY_TYPE = loader('../../graphql/constants/queryByType.graphql');
interface QueryProps {
  type: String
}
export const GetPokemonsByType: React.FC<QueryProps> = ({type}) => {
  const [nodes, setItem] = useState();
  const { error, loading, data } = useQuery(GET_POKEMONS_BY_TYPE, {
    variables: { type }
  });

  useEffect(() => {
    if( data ) {
      // @ts-ignore
      const nodes = data?.pokemons?.edges.map(edge => edge.node);
      setItem(nodes);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <Alert message="Error" type="error" />;

  // @ts-ignore
  const listItems = nodes?.map((d) =>
    <Col span={8}>
      <Space size="middle">
        <PokemonDetail key={d.ID} ID={d.ID} name={d.name} types={d.types} classification={d.classification} />
      </Space>
    </Col>
  );

  return (
    <Row>
      {listItems}
    </Row>
  );
}
