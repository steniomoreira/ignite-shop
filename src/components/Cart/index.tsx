import { useState } from "react";
import { Sidepanel } from "../Sidepanel";
import { CartButton } from "./CartButton";
import { CartContainer } from "./styles";

export function Cart() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleOpen() {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <CartContainer>
        <span>1</span>
        <CartButton color='gray' onClick={toggleOpen} />
      </CartContainer>

      <Sidepanel isOpen={isOpen} toggleOpen={toggleOpen}/>
    </>
  )
}