import React, {Fragment, useState} from "react";
import './_pokemon-search.scss';
import { Input } from 'antd';
import {GetPokemonsByName} from "./pokemon-by-name";
const { Search } = Input;


interface SearchProps {}
export type Procedure = (...args: any[]) => void;
export type Options = {
  isImmediate: boolean,
}

const PokemonSearch: React.FC<SearchProps> = () => {
  const [value, setValue] = useState("");
  const [dbValue, saveToDb] = useState("");

  const handleChange = (event: any) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);
    debouncedFunction(nextValue);
  };
  const debouncedFunction = debounce((nextValue) => saveToDb(nextValue), 1000);
  return (
    <Fragment>
      <Search placeholder="input search loading default"
              allowClear
              onChange={handleChange}
              value={value}
              loading={false}
        // onSearch={debouncedFunction}  The callback function triggered when you click on the search-icon, the clear-icon or press the Enter key
      />
      <GetPokemonsByName name={dbValue} call={false}/>
    </Fragment>

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
