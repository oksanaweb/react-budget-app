import React from "react";
import { StyleInputSearch } from "./styles";

interface InputSearchProps {
  placeholder: string;
}

export const InputSearch = ({ placeholder }: InputSearchProps) => {
  return <StyleInputSearch placeholder={placeholder} />;
};
