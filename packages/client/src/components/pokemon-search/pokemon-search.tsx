import React, {Fragment, useState} from "react";
import './_pokemon-search.scss';
import {Input, Divider, Col, Row} from 'antd';
import {GetPokemonsByName} from "./pokemon-by-name";
import {GetPokemonsByType} from "./pokemon-by-type";
const { Search } = Input;


interface SearchProps {
  by: String
}
export type Procedure = (...args: any[]) => void;
export type Options = {
  isImmediate: boolean,
}

const PokemonSearch: React.FC<SearchProps> = ({by}) => {
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
      <Row gutter={16}>
        <Col span={6}>
          <Input placeholder="Inserisci il nome del pokemon 🤙🏽"
                  allowClear
                  onChange={handleChange}
                  value={value}
          />
        </Col>
      </Row>
      <Divider />
      {
        by == 'name' ? (<GetPokemonsByName name={dbValue} />) : (<GetPokemonsByType type={dbValue} />)
      }
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
