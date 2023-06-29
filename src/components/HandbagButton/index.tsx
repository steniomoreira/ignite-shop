import { Handbag } from "@phosphor-icons/react";
import { ButtonContainer } from "./styles";
import { ButtonHTMLAttributes } from "react";

interface HandbagButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'green' | 'gray'
}

export function HandbagButton({ ...props }: HandbagButtonProps) {
  return (
    <ButtonContainer color={props.color}>
      <Handbag size={32} />
    </ButtonContainer>
  )
}