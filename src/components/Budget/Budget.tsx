import React from "react";
import {
  BudgetCard,
  RemainingCard,
  CustomSelect,
  SpentCard,
  Title,
} from "../../components";
import { HeaderGroup, StyledBudget } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <HeaderGroup>
        <Title title="Budget App" />
        <CustomSelect />
      </HeaderGroup>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBudget>
  );
};
