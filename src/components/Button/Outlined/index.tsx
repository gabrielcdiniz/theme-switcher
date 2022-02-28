import type { HTMLAttributes, ReactNode } from "react";

import { styled } from "@/styles/themes/default";

import { StyledButtonBase } from "../Base";
import { ButtonOutlinedCSS } from "./styles";

// used for variants
const StyledButtonOutlined = styled(StyledButtonBase, ButtonOutlinedCSS);

type ButtonOutlinedProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const ButtonOutlined = ({ children, ...props }: ButtonOutlinedProps) => {
  return (
    <StyledButtonOutlined {...props} type="button">
      {children}
    </StyledButtonOutlined>
  );
};

export { StyledButtonOutlined, ButtonOutlined };
