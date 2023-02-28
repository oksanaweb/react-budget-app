import { createContext, ReactNode, useContext, useState } from "react";
import { CurrencyValue } from "../../types/types";
import { Currency } from "../../config/currency";

interface CurrencyContextProps {
  children: ReactNode;
}

interface CurrencyContextValue {
  currencies: CurrencyValue[];
  changeCurrency: (option: CurrencyValue) => void;
  currentCurrency: CurrencyValue;
}

const CurrencyContext = createContext<CurrencyContextValue>(
  {} as CurrencyContextValue
);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<CurrencyContextValue>(
    () => ({
      currentCurrency: {
        label: "USD",
        value: Currency.USD,
      },
      currencies: [
        {
          label: "USD",
          value: Currency.USD,
        },
        {
          label: "EUR",
          value: Currency.EUR,
        },
        {
          label: "GBR",
          value: Currency.GBR,
        },
      ],
      changeCurrency: (currentCurrency) => {
        setCurrencyContext((ctx) => ({ ...ctx, currentCurrency }));
      },
    })
  );

  return currencyContext;
};

export const useCurrencyContext = () =>
  useContext<CurrencyContextValue>(CurrencyContext);

export const CurrencyContextProvider = ({ children }: CurrencyContextProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
