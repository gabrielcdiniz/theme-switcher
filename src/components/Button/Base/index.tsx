import type { HTMLAttributes, ReactNode } from "react";

import { styled } from "@/styles/themes/default";

import { ButtonBaseCSS } from "./styles";

// used for variants
const StyledButtonBase = styled("button", ButtonBaseCSS);

type ButtonBaseProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const ButtonBase = ({ children, ...props }: ButtonBaseProps) => {
  return (
    <StyledButtonBase {...props} type="button">
      {children}
    </StyledButtonBase>
  );
};

export { StyledButtonBase, ButtonBase };
