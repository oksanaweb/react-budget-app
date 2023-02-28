import { Currency } from "../config/currency";

export interface ExpenseProduct {
  name: string;
  cost: number;
  id: string;
}

export interface CurrencyValue {
  label: keyof typeof Currency;
  value: Currency;
}
