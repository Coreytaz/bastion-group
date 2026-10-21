import type { InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";
import User from "./user.svg";
import Phone from "./phone.svg";
import Mail from "./mail.svg";
import Org from "./org.svg";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: "user" | "phone" | "mail" | "org";
}

const icons = { user: User, phone: Phone, mail: Mail, org: Org };

export function Input({ className, icon, id, name, placeholder, ...props }: InputProps) {
  const inputId = id ?? name;
  return (
    <div className={cn(className, styles.form)}>
      {icon && <img src={icons[icon]} alt="" aria-hidden="true" />}
      <input id={inputId} name={name} className={styles.input} placeholder=" " {...props} />
      {placeholder && <label className={styles.labelName} htmlFor={inputId}>
        <span className={styles.contentName}>{placeholder}</span>
      </label>}
    </div>
  );
}
