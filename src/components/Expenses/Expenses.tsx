import React, { useEffect, useState } from "react";
import { InputSearch, ExpensesList, Title } from "components";
import { EmptyText, StyledExpenses } from "./styles";
import { ExpenseProduct } from "types";
import { useExpensesContext } from "context";
import { useInput, useDebounce } from "hooks";

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const searchValue = useInput();
  const debouncedValue = useDebounce(searchValue, 500);
  const [filteredExpenses, setFilteredExpenses] =
    useState<ExpenseProduct[]>(expenses);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchValue.value.toLowerCase())
      )
    );
  }, [debouncedValue, expenses]);

  return (
    <StyledExpenses>
      <Title title="Expenses" />
      <InputSearch placeholder="seach..." {...searchValue} />
      {expenses.length ? (
        <ExpensesList expenses={filteredExpenses} />
      ) : (
        <EmptyText>Oooops 🙈</EmptyText>
      )}
    </StyledExpenses>
  );
};
