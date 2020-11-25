import React from "react";
import { gql, useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import Loading from '../../components/loading/loading';
import './_pokemon-search.scss';
import { Input } from 'antd';
import PokemonDetail from "../../components/pokemon-detail/pokemon-detail";
const { Search } = Input;

interface SearchProps {
  loading: boolean
}
export type Procedure = (...args: any[]) => void;
export type Options = {
  isImmediate: boolean,
}

const PokemonSearch: React.FC<SearchProps> = ({loading}) => {

  // @ts-ignore
  const onSearch = e => {
    console.log(e.target.value);
  };
  const debouncedFunction = debounce(onSearch, 1000);
  return (
    <Search placeholder="input search loading default"
            allowClear
            onChange={debouncedFunction}
            loading={loading}
      // onSearch={debouncedFunction}  The callback function triggered when you click on the search-icon, the clear-icon or press the Enter key
    />
  );
};

export default PokemonSearch;

// helpers

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 50,
  options: Options = {
    isImmediate: false
  },
): (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function(this: ThisParameterType<F>, ...args: Parameters<F>) {
    const context = this;

    const doLater = function() {
      timeoutId = undefined;
      if (!options.isImmediate) {
        func.apply(context, args);
      }
    }

    const shouldCallNow = options.isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      func.apply(context, args);
    }
  }
}
