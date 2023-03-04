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
    budget - expenses.reduce((total, { cost }) => total + +cost, 0);

  const remainingOverspent = Math.abs(remaining);

  const isOverspending = remaining < 0;
  return (
    <StyledRemainingCard $isOverspending={isOverspending}>
      <StyledRemainingText>
        {isOverspending
          ? `Overspending by: ${currentCurrency.value}${remainingOverspent}`
          : `Remaining: ${currentCurrency.value}${remaining}`}
      </StyledRemainingText>
    </StyledRemainingCard>
  );
};
