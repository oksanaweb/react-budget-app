import { type } from "os";
import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import { UseFormRegister } from "react-hook-form";
import { StyledInput } from "./styles";

interface InputType {
  placeholder: string;
}

export const Input = ({ placeholder }: InputType) => {
  return <StyledInput placeholder={placeholder} />;
};
