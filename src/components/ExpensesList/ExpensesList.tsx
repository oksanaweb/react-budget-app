import React from "react";
import { Badge } from "../Badge/Badge";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { ExpenseProduct } from "../../types/types";
import { StyledExpenseList } from "./styles";

interface ExpensesListProps {
  expenses: ExpenseProduct[];
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <StyledExpenseList>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} />
      ))}
    </StyledExpenseList>
  );
};
