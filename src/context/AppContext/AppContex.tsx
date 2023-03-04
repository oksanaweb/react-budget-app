import React, { FC, ReactNode } from "react";
import { BudgetContextProvider } from "../BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "../CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "../ExpensesContext/ExpensesContext";

const providers = [
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
];

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {providers.reduceRight((total, Provider) => {
        return <Provider>{total}</Provider>;
      }, children)}
    </>
  );
};
