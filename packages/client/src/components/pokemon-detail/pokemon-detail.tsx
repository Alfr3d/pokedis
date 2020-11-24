import React, { FunctionComponent } from 'react';
import { Card } from 'antd';
import './_pokemon-detail.scss';

interface PokeProps {
  ID: any,
  name: string,
  types: string[],
  classification?: string
}

const PokemonDetail: FunctionComponent<PokeProps> = ({ID, name, types, classification} : PokeProps) => {
  return (
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }} id={ID}>
      <p>{name}</p>
      <p>{types?.map(type => <span key={type.toString()}>{type},</span>)}</p>
      <p>{classification}</p>
    </Card>
  );
};

export default PokemonDetail;
