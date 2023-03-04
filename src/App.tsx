import React from "react";
import { StyledApp } from "ui";
import { Budget, Expenses, Form } from "components";

export const App = () => {
  return (
    <StyledApp>
      <Budget />
      <Expenses />
      <Form />
    </StyledApp>
  );
};
