import React from "react";
import { StyledApp } from "./ui/styles";
import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";

export const App = () => {
  return (
    <StyledApp>
      <Budget />
      <Expenses />
      <Form />
    </StyledApp>
  );
};
