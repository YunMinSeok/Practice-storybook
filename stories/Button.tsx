/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button css={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
