import { StylesConfig } from "react-select";
import { CurrencyValue } from "../../types/types";

export const selectStyles: StylesConfig<CurrencyValue> = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: "30px",
    width: "85px",
    borderRadius: "5px",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    fontSize: "12px",
    textAlign: "center",
    color: "#000",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isSelected
      ? "rgba(3, 138, 255, 1 )"
      : state.isFocused
      ? "rgba(205, 209, 228, 1)"
      : "transparent",
  }),
};
