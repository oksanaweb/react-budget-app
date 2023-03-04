import React from "react";
import { useCurrencyContext, useExpensesContext } from "context";
import { ExpenseProduct } from "types";
import { Badge } from "components";

import {
  StyledButtonDelete,
  StyledExpenseItem,
  StyledExpenseText,
  StyledItemBox,
} from "./styles";

interface ExpenseItemProps {
  expense: ExpenseProduct;
}

export const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  const { deleteExpense, expenses } = useExpensesContext();
  const { currentCurrency } = useCurrencyContext();

  const handleButton = () => {
    deleteExpense(expense.id);
  };

  return (
    <StyledExpenseItem>
      <StyledExpenseText>{expense.name}</StyledExpenseText>
      <StyledItemBox>
        <Badge cost={expense.cost} />
        <StyledButtonDelete onClick={handleButton}></StyledButtonDelete>
      </StyledItemBox>
    </StyledExpenseItem>
  );
};
