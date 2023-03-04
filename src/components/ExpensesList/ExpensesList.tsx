import React from "react";
import { ExpenseItem } from "components";
import { ExpenseProduct } from "types";
import { StyledExpenseList } from "./styles";

interface ExpensesListProps {
  expenses: ExpenseProduct[];
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <StyledExpenseList>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </StyledExpenseList>
  );
};
