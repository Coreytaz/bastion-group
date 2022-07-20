import React from "react";

type validProps = {
  isEmpty?: boolean;
  isNumber?: boolean;
  Fname?: boolean;
  Email?: boolean;
};

export const useValid = (value: any, validators: validProps) => {
  const [empty, setEmpty] = React.useState(true);
  const [isNumber, setIsNumber] = React.useState(false);
  const [inputValid, setInputValid] = React.useState(false);
  const [Fullname, setFullname] = React.useState(false);
  const [Email, setEmail] = React.useState(false);

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
        case "Fname":
          const regExp =
            /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/gi;
          regExp.test(value) ? setFullname(false) : setFullname(true);
          break;
        case "Email":
          const re =
            /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
          re.test(value) ? setEmail(false) : setEmail(true);
          break;
      }
    }
  }, [value]);

  React.useEffect(() => {
    if (empty || isNumber || Fullname) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [empty, isNumber, Fullname, Email]);

  return {
    empty,
    inputValid,
    isNumber,
    Fullname,
    Email,
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
