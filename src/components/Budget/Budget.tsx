import React from "react";
import { BudgetCard } from "../BudgetCard/BudgetCard";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { SpentCard } from "../SpentCard/SpentCard";
import { Title } from "../Title/Title";
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
