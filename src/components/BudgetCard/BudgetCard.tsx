import React from "react";
import { useBudgetContext, useCurrencyContext } from "context";
import { useInput, useToggle } from "hooks";

import {
  StyledBudgetCard,
  StyledInput,
  StyledButton,
  StyledTitleBudget,
} from "./styles";

export const BudgetCard = () => {
  const { budget, setNewBudget } = useBudgetContext();
  const [isEditMode, toggleMode] = useToggle(false);
  const { currentCurrency } = useCurrencyContext();

  const inputBudget = useInput();

  const handleSave = () => {
    setNewBudget(Number(inputBudget.value));
    toggleMode();
  };

  const handleEdit = () => toggleMode();

  return (
    <StyledBudgetCard>
      {isEditMode ? (
        <>
          <StyledInput
            placeholder="Enter Budget ..."
            type={"number"}
            {...inputBudget}
          />
          <StyledButton type="button" onClick={handleSave}>
            Save
          </StyledButton>
        </>
      ) : (
        <>
          <StyledTitleBudget>
            Budget: {currentCurrency.value}
            {budget}
          </StyledTitleBudget>
          <StyledButton type="button" onClick={handleEdit}>
            Edit
          </StyledButton>
        </>
      )}
    </StyledBudgetCard>
  );
};
