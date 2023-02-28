import React from "react";
import { Badge } from "../Badge/Badge";
import {
  StyledButtonDelete,
  StyledExpenseItem,
  StyledExpenseText,
  StyledItemBox,
} from "./styles";

export const ExpenseItem = () => {
  return (
    <StyledExpenseItem>
      <StyledExpenseText>Like</StyledExpenseText>
      <StyledItemBox>
        <Badge />
        <StyledButtonDelete></StyledButtonDelete>
      </StyledItemBox>
    </StyledExpenseItem>
  );
};
