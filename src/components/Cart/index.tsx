import { useState } from "react";
import { Sidepanel } from "../Sidepanel";
import { CartButton } from "./CartButton";
import { CartContainer } from "./styles";
import { useCart } from "@/src/hooks/useCart";

export function Cart() {
  const {cartItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const totalItems = cartItems?.length;

  function toggleOpen() {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <CartContainer>
        {totalItems > 0 && (
          <span>{ totalItems }</span>
        )}
        
        <CartButton color='gray' onClick={toggleOpen} disabled={ totalItems < 1 } />
      </CartContainer>

      <Sidepanel isOpen={isOpen} toggleOpen={toggleOpen}/>
    </>
  )
}