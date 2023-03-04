import React from "react";
import { useCurrencyContext, useExpensesContext } from "context";
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
