import React, {useState, useEffect, useRef, FunctionComponent, SVGProps} from 'react';
import { Card, Avatar } from 'antd';
import './_pokemon-detail.scss';
import pokePlaceholderIco from '../../assets/images/188915-pokemon-go/ultra-ball.svg';
const { Meta } = Card;

interface PokeProps {
  ID: any,
  name: string,
  types: string[],
  classification?: string
}

const PokemonDetail: FunctionComponent<PokeProps> = ({ID, name, types, classification} : PokeProps) => {
  return (
    <Card style={{ width: "100%" }} id={ID}>
      <Meta
        // avatar={<Icon name={name.toLowerCase()} />}
        avatar={<Avatar src={pokePlaceholderIco} />}
        title={name}
        description={<div>
          <p><strong>Type: </strong>{types?.map(type => <span key={type.toString()}>{type},</span>)}</p>
          <p><strong>Classification: </strong>{classification}</p>
        </div>}
      />
    </Card>
  );
};

export default PokemonDetail;

// helpers

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const Icon: FunctionComponent<IconProps> = ({ name, ...rest }): JSX.Element | null => {
  const ImportedIconRef = useRef<FunctionComponent<SVGProps<SVGSVGElement>> | any>();
  const [loading, setLoading] = React.useState(false);
  useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        // Changing this line works fine to me
        ImportedIconRef.current = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!./images/188915-pokemon-go/${name}.svg`)).default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }
  return null;
};
