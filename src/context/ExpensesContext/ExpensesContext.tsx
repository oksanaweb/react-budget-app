import { createContext, ReactNode, useContext, useState } from "react";
import { ExpenseProduct } from "types";

export const ExpensesContext = createContext<ExpensesContextValue>(
  {} as ExpensesContextValue
);

interface ExpensesContextProvider {
  children: ReactNode;
}

interface ExpensesContextValue {
  expenses: ExpenseProduct[];
  addNewExpense: (expense: ExpenseProduct) => void;
  deleteExpense: (id: string) => void;
}

const useExpensesContexValue = () => {
  const [expensesContext, setExpensesContext] = useState<ExpensesContextValue>(
    () => {
      return {
        expenses: [],
        addNewExpense: (newExpense) => {
          setExpensesContext((ctx) => ({
            ...ctx,
            expenses: [...ctx.expenses, newExpense],
          }));
        },
        deleteExpense: (id) => {
          setExpensesContext((ctx) => ({
            ...ctx,
            expenses: ctx.expenses.filter((expense) => expense.id !== id),
          }));
        },
      };
    }
  );
  return expensesContext;
};

export const useExpensesContext = () =>
  useContext<ExpensesContextValue>(ExpensesContext);

export const ExpensesContextProvider = ({
  children,
}: ExpensesContextProvider) => {
  return (
    <ExpensesContext.Provider value={useExpensesContexValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
