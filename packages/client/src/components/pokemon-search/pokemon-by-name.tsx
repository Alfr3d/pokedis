import React from "react";
import {useLazyQuery, useQuery} from "@apollo/client";
import Loading from "../loading/loading";
import {Col, Row, Space} from "antd";
import PokemonDetail from "../pokemon-detail/pokemon-detail";
import {loader} from "graphql.macro";

const GET_POKEMONS_BY_NAME = loader('../../graphql/constants/queryByName.graphql');
interface QueryProps {
  name: String,
  call: boolean
}
export const GetPokemonsByName: React.FC<QueryProps> = ({name, call}) => {
  const [loadGreeting, { called, loading, data }] = useLazyQuery(GET_POKEMONS_BY_NAME, {
    variables: { name }
  });

  if (called && loading) return <Loading />;
  if (!called) {
    return <button onClick={() => loadGreeting()}>Load greeting</button>
  }
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

  return (
    <Row>
      {listItems}
    </Row>
  );
}
