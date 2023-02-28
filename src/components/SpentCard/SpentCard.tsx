import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledSpentCard, StyledSpentText } from "./styles";

export const SpentCard = () => {
  const { expenses } = useExpensesContext();
  const { currentCurrency } = useCurrencyContext();

  const totalExpenses = expenses.reduce((total, { cost }) => total + +cost, 0);
  return (
    <StyledSpentCard>
      <StyledSpentText>
        Spent so far: {currentCurrency.value}
        {totalExpenses}{" "}
      </StyledSpentText>
    </StyledSpentCard>
  );
};
