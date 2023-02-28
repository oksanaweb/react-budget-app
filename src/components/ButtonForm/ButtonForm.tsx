import React, { ButtonHTMLAttributes } from "react";
import { StyledButtonForm } from "./styles";

export const ButtonForm = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButtonForm {...props}>Done</StyledButtonForm>;
};
