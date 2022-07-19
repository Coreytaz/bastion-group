import React from "react";

type validProps = {
  isEmpty?: boolean;
  isNumber?: boolean;
};

export const useValid = (value: any, validators: validProps) => {
  const [empty, setEmpty] = React.useState(true);
  const [isNumber, setIsNumber] = React.useState(false);
  const [inputValid, setInputValid] = React.useState(false);

  React.useEffect(() => {
    for (const valid in validators) {
      switch (valid) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isNumber":
          const reg = /^\d+$/;
          reg.test(value) ? setIsNumber(false) : setIsNumber(true);
          break;
      }
    }
  }, [value]);

  React.useEffect(() => {
    if (empty || isNumber) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [empty, isNumber]);

  return {
    empty,
    inputValid,
    isNumber,
  };
};

export const useInput = (initialValue: string, validations: validProps) => {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setDirty] = React.useState<Boolean>(false);
  const valid = useValid(value, validations);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
  };
  const onClear = () => {
    setValue("");
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onClear,
    onBlur,
    isDirty,
    ...valid,
  };
};
