import React from "react";
import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "context";
import { CurrencyValue } from "types";
import { selectStyles } from "./styles";

export const CustomSelect = () => {
  const { currentCurrency, currencies, changeCurrency } = useCurrencyContext();
  const handleOption = (option: SingleValue<CurrencyValue>) => {
    if (option) {
      changeCurrency(option);
    }
  };
  return (
    <Select
      styles={selectStyles}
      onChange={handleOption}
      options={currencies}
      value={currentCurrency}
      isMulti={false}
      isSearchable={false}
    />
  );
};
