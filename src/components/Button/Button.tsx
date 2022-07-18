import React from "react";
import cn from "classnames";
import Catalog from "./catalog.svg";
import Cart from "./cart.svg";
import Commercial from "./Commercial.svg";
import Shopping from "./shopping.svg";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  appearance: "primary" | "ghost";
  icon?: "catalog" | "cart" | "Commercial" | 'Shopping';
}

const Button: React.FC<ButtonProps> = ({
  icon,
  appearance,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {icon === "catalog" && (
        <span className={cn(styles.span)}>
          <img src={Catalog} alt="catalog" />
        </span>
      )}
      {icon === "cart" && (
        <span className={cn(styles.span)}>
          <img src={Cart} alt="cart" />
        </span>
      )}
      {icon === "Shopping" && (
        <span className={cn(styles.span)}>
          <img src={Shopping} alt="Shopping" />
        </span>
      )}
      {icon === "Commercial" && (
        <span className={cn(styles.span)}>
          <img src={Commercial} alt="Commercial" />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
