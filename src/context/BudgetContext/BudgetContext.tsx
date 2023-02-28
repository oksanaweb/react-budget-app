import { createContext, ReactNode, useContext, useState } from "react";

const BudgetContext = createContext<BudgetContextValue>(
  {} as BudgetContextValue
);

interface BudgetContextProviderProps {
  children: ReactNode;
}

interface BudgetContextValue {
  budget: number;
  setNewBudget: (value: number) => void;
}

export const useBudgetContext = () =>
  useContext<BudgetContextValue>(BudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<BudgetContextValue>(
    () => ({
      budget: 0,
      setNewBudget: (newBudget) => {
        setBudgetContext((ctx) => ({
          ...ctx,
          budget: newBudget,
        }));
      },
    })
  );
  return budgetContext;
};

export const BudgetContextProvider = ({
  children,
}: BudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
