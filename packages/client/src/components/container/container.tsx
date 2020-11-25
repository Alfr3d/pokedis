import React from 'react';

interface ContainerProps { }
const Container = (props: React.PropsWithChildren<ContainerProps>) => {

  return (
    <section>
      {props.children}
    </section>
  );
};

export default Container;
