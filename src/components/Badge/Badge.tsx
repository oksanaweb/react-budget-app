import React from "react";
import { useCurrencyContext } from "context";
import { StyledBadge } from "./styles";

interface BadgeProps {
  cost: number;
}

export const Badge = ({ cost }: BadgeProps) => {
  const { currentCurrency } = useCurrencyContext();
  return (
    <StyledBadge>
      {currentCurrency.value} {cost}
    </StyledBadge>
  );
};
