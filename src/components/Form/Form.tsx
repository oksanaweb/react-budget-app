import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ButtonForm } from "../ButtonForm/ButtonForm";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import { StyledForm, StyledInputGroup } from "./styles";

interface FormValues {
  name: string;
  cost: number;
}

export const Form = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>();
  const { addNewExpense } = useExpensesContext();
  const { budget } = useBudgetContext();

  const onSubmit: SubmitHandler<FormValues> = ({ name, cost }) => {
    {
      addNewExpense({
        name,
        cost,
        id: "",
      });
      reset();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title title="Add Expense" />
      <StyledInputGroup>
        <Controller
          name="name"
          control={control}
          rules={{ required: "name is required" }}
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="cost"
          control={control}
          rules={{ required: "true" }}
          render={({ field }) => <Input {...field} />}
        />
      </StyledInputGroup>
      <ButtonForm type={"submit"} />
    </StyledForm>
  );
};
