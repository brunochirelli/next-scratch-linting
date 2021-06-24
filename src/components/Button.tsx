import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <div>{children}</div>;
};

export default Button;
