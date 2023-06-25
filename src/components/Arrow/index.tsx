import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";
import { ArrowButton } from "./styles";

interface ArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {  
  linearGradient:'left' | 'right',
  handleClick: (e: any) => void,
}

export function Arrow({ handleClick, linearGradient, ...props }: ArrowProps) {

  return (
    <ArrowButton
      linearGradient={linearGradient}
      onClick={handleClick}
      {...props}
    >
      {linearGradient === 'left' && (
          <CaretLeft size={48}/>
      )}

      {linearGradient === 'right' && (
          <CaretRight size={48} />
      )}
    </ArrowButton>
  )
}