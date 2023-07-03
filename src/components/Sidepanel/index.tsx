import axios from "axios";
import { useState } from "react";
import { X } from "@phosphor-icons/react";
import { Button } from "../Button";
import { SidepanelClose, SidepanelContainer, SidepanelFooter, SidepanelImageContainer, SidepanelItem } from "./styles";
import { useCart } from "@/src/hooks/useCart";
import { Product } from "@/src/types/productType";

type SidepanelProps = {
  isOpen: boolean,
  toggleOpen: () => void,
}

export function Sidepanel({ isOpen, toggleOpen }: SidepanelProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession ] = useState(false)
  const { cartItems, removeCartItem, currencyTotal} = useCart();

  const totalItems = cartItems?.length;

  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(currencyTotal)

  async function handleBuyProduct() {
    try {
        setIsCreatingCheckoutSession(true);

        const response = await axios.post('/api/checkout', {
            products: cartItems
        })

        const { checkoutUrl } = response.data;

        window.location.href = checkoutUrl
    } catch (error) {
        setIsCreatingCheckoutSession(false);   
        alert('Falha ao redirecionar ao checkout!')
    }        
  }

  return (
    <SidepanelContainer isOpen={isOpen}>
      <SidepanelClose onClick={toggleOpen} >
        <X size={24} />
      </SidepanelClose>

      <h2>Sacola de compras</h2>

      <section>
        {cartItems.map(({id, imageUrl, name, price}: Product) => (
          <SidepanelItem key={ id }>
            <SidepanelImageContainer>
              <img src={ imageUrl } alt="" />
            </SidepanelImageContainer>

            <span>
              <h2>
                { name }
                <strong>{ price }</strong>
              </h2>
              
              <button onClick={() => removeCartItem(id)}>Remover</button>
            </span>
          </SidepanelItem> 
        ))}
      </section>

      <SidepanelFooter>
        <ul>
          <li>
            Quantidade
            <strong>{`${totalItems} item${ totalItems > 1 ? 's': ''}`}</strong>
          </li>
          <li>
            Valor total
            <strong>{formattedCurrency}</strong>
          </li>
        </ul>

        <Button 
          onClick={handleBuyProduct}
          disabled={isCreatingCheckoutSession || totalItems < 1}
        >
          Finalizar compra
        </Button>
      </SidepanelFooter>
    </SidepanelContainer>
  )
}