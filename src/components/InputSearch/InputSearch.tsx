import React, { InputHTMLAttributes } from "react";
import { StyleInputSearch } from "./styles";

export const InputSearch = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyleInputSearch {...props} />;
};
