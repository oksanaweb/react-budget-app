import React from "react";
import {
  useBudgetContext,
  useCurrencyContext,
  useExpensesContext,
} from "context";
import { StyledRemainingCard, StyledRemainingText } from "./styles";

export const RemainingCard = () => {
  const { expenses } = useExpensesContext();
  const { budget } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();

  const remaining =
    budget - expenses.reduce((total, { cost }) => total + Number(cost), 0);

  const isOverspending = remaining < 0;
  return (
    <StyledRemainingCard $isOverspending={isOverspending}>
      <StyledRemainingText>
        {isOverspending
          ? `Overspending by: ${currentCurrency.value}${Math.abs(remaining)}`
          : `Remaining: ${currentCurrency.value}${remaining}`}
      </StyledRemainingText>
    </StyledRemainingCard>
  );
};
