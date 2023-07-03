import { Handbag } from "@phosphor-icons/react";
import { CartButtonContainer } from "./styles";
import { ButtonHTMLAttributes } from "react";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'green' | 'gray'
}

export function CartButton({ ...props }: CartButtonProps) {
  return (
    <CartButtonContainer color={props.color} {...props}>
      <Handbag size={32} />
    </CartButtonContainer>
  )
}