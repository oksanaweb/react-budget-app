import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledRemainingCard, StyledRemainingText } from "./styles";

export const RemainingCard = () => {
  const { expenses } = useExpensesContext();
  const { budget } = useBudgetContext();

  const remaining =
    budget - expenses.reduce((total, { cost }) => total + cost, 0);

  return (
    <StyledRemainingCard>
      <StyledRemainingText>Remaining{remaining}</StyledRemainingText>
    </StyledRemainingCard>
  );
};
