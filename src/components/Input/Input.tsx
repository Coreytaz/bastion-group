import styles from "./Input.module.scss";
import cn from "classnames";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import User from "./user.svg";
import Phone from "./phone.svg";
import Mail from "./mail.svg";
import Org from "./org.svg";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: "user" | "phone" | "mail" | "org";
}

export const Input: FC<InputProps> = ({
  className,
  icon,
  ...props
}: InputProps) => {
  return (
    <div className={cn(className, styles.form)}>
      {icon === "user" && <img src={User} alt="icon" />}
      {icon === "phone" && <img src={Phone} alt="icon" />}
      {icon === "mail" && <img src={Mail} alt="icon" />}
      {icon === "org" && <img src={Org} alt="icon" />}
      <input className={cn(styles.input)} {...props} placeholder="" />
      <label className={cn(styles.labelName)} htmlFor={props.name}>
        <span className={cn(styles.contentName)}>{props.placeholder}</span>
      </label>
    </div>
  );
};
