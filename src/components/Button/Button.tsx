import type { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import Catalog from "./catalog.svg";
import Cart from "./cart.svg";
import Commercial from "./Commercial.svg";
import Shopping from "./shopping.svg";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appearance: "primary" | "ghost";
  icon?: "catalog" | "cart" | "Commercial" | "Shopping";
}

const icons = { catalog: Catalog, cart: Cart, Commercial, Shopping };

export default function Button({ icon, appearance, children, className, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(styles.button, styles[appearance], className)} {...props}>
      {icon && <span className={styles.span}><img src={icons[icon]} alt="" /></span>}
      <span>{children}</span>
    </button>
  );
}
