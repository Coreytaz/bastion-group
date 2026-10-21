import { useState, type ChangeEvent } from "react";

export interface Validations {
  isEmpty?: boolean;
  isNumber?: boolean;
  Fname?: boolean;
  Email?: boolean;
  Phone?: boolean;
}

// Validation is derived from the value (never mirrored in additional state/effects).
export function useValid(value: string, validations: Validations) {
  const trimmed = value.trim();
  const empty = Boolean(validations.isEmpty && !trimmed);
  const isNumber = Boolean(validations.isNumber && !/^\d+$/.test(trimmed));
  const Fullname = Boolean(validations.Fname && !/^[\p{L}'-]+(?:\s+[\p{L}'-]+)+$/u.test(trimmed));
  const digits = trimmed.replace(/\D/g, "");
  const Phone = Boolean(validations.Phone && (!/^[+\d\s()-]+$/.test(trimmed) || digits.length < 10 || digits.length > 15));
  const Email = Boolean(validations.Email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed));
  return { empty, isNumber, Fullname, Email, Phone, inputValid: !(empty || isNumber || Fullname || Email || Phone) };
}

export function useInput(initialValue: string, validations: Validations) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(event.target.value);
  };
  const onClear = () => {
    setValue("");
    setDirty(false);
  };
  const onBlur = () => setDirty(true);

  return { value, onChange, onClear, onBlur, isDirty, ...useValid(value, validations) };
}
