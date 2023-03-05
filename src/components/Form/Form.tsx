import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useExpensesContext } from "context";
import { ButtonForm, Title } from "components";
import {
  StyledError,
  StyledForm,
  StyledInputForm,
  StyledInputGroup,
} from "./styles";
import { v4 } from "uuid";

interface FormValues {
  name: string;
  cost: number;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const { addNewExpense } = useExpensesContext();

  const onSubmit: SubmitHandler<FormValues> = ({ name, cost }) => {
    addNewExpense({
      name,
      cost,
      id: v4(),
    });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title title="Add Expense" />
      <StyledInputGroup>
        <StyledInputForm
          {...register("name", {
            required: "field is required",
            maxLength: {
              value: 15,
              message: "the field should contain no more than 15 letters",
            },
          })}
          type="text"
          placeholder="enter name ..."
        />
        {errors.name?.message && (
          <StyledError>{errors.name.message}</StyledError>
        )}
        <StyledInputForm
          {...register("cost", {
            required: "field is required",
            maxLength: { value: 5, message: " max 5 numbers" },
            valueAsNumber: true,
          })}
          type="number"
          placeholder="enter cost ..."
        />
        {errors.cost?.message && (
          <StyledError>{errors.cost.message}</StyledError>
        )}
      </StyledInputGroup>
      <ButtonForm type={"submit"} />
    </StyledForm>
  );
};
