import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void,
  children: ReactNode,
}

export function Button({ onClick, children, ...props }: ButtonProps) {
  return (
    <ButtonContainer
      onClick={ onClick }
      {...props}
      >
      { children }
    </ButtonContainer>
  )
}