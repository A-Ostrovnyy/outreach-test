import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";

import "./styles.css";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;
  return (
    <button className={clsx("button", className)} {...rest}>
      {children}
    </button>
  );
}
