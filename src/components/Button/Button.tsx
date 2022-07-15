import React from "react";
import cn from "classnames";
import Catalog from "./catalog.svg";
import Cart from "./cart.svg";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  appearance: "primary" | "ghost";
  icon?: "catalog" | "cart";
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
        <span className={cn(styles.catalog)}>
          <img src={Catalog} alt="catalog" />
        </span>
      )}
      {icon === "cart" && (
        <span className={cn(styles.cart)}>
          <img src={Cart} alt="cart" />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
