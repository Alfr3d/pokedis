import React, { FunctionComponent } from 'react';
import { Card } from 'antd';
import './_PokemonDetail.scss';

interface PokeProps {
  name: string,
  type: string[],
  classification?: string
}

export const PokemonDetail: FunctionComponent<PokeProps> = ({name, type, classification} : PokeProps) => {
  return (
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>{name}</p>
      <p>{type}</p>
      <p>{classification}</p>
    </Card>
  );
};
