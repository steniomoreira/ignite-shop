import { ReactNode, createContext, useState } from "react";
import { Product } from "../types/productType";

type CartContextType = {
  cartItems: Product[];
  addCartItem: (product: Product) => void;
  verifyExistsInCart: (productId: string) => boolean;
  removeCartItem: (productId: string) => void;
  currencyTotal: number,
}

type CartContextProviderProps = {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function addCartItem( product: Product ) {
    setCartItems(prevState => [...prevState, product])
  }

  function verifyExistsInCart(productId: string) {
    return cartItems.some( product => product.id === productId)
  }

  function removeCartItem(productId: string) {
    setCartItems(cartItems.filter( product => product.id !== productId))
  }

  const currencyTotal = cartItems.reduce(( acc, product ) => {
    return acc + product.numberPrice;
  }, 0)

  return (
    <CartContext.Provider value={{ cartItems, addCartItem, verifyExistsInCart, removeCartItem, currencyTotal}}>
      { children }
    </CartContext.Provider>
  )
}