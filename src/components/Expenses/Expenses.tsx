import React, { useState } from "react";
import { InputSearch } from "../InputSearch/InputSearch";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { Title } from "../Title/Title";
import { EmptyText, StyledExpenses } from "./styles";
import { ExpenseProduct } from "../../types/types";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { useInput } from "../../hooks/useInput";
import { useDebounce } from "../../hooks/useDebounce";

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const searchValue = useInput();
  const debouncedValue = useDebounce(searchValue.value);
  const [sortedExpenses, setSortedExpenses] = useState<ExpenseProduct[]>();

  return (
    <StyledExpenses>
      <Title title="Expenses" />
      <InputSearch placeholder="seach..." />
      <ExpensesList expenses={[]} />
      <EmptyText>Oooops 🙈</EmptyText>
    </StyledExpenses>
  );
};
