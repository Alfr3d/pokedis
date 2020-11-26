import * as React from 'react';

interface IPokemonsPageInfoProps {
  endCursor?: string;
  hasNextPage: boolean;
  setPageInfo(hasNextPage: boolean, endCursor?: string): void;
}

class PokemonsPageInfo extends React.Component<IPokemonsPageInfoProps, {}> {
  public componentDidUpdate(prevProps: IPokemonsPageInfoProps) {
    const { endCursor, hasNextPage, setPageInfo } = this.props;
    const prevEndCursor = prevProps.endCursor;
    const prevHasNextPage = prevProps.hasNextPage;
    if (endCursor === prevEndCursor && hasNextPage === prevHasNextPage) {
      return;
    }
    setPageInfo(hasNextPage, endCursor);
  }

  public render() {
    return null;
  }
}

export default PokemonsPageInfo;
