import { X } from "@phosphor-icons/react";
import { Button } from "../Button";
import { SidepanelClose, SidepanelContainer, SidepanelFooter, SidepanelItem } from "./styles";

type SidepanelProps = {
  isOpen: boolean,
  toggleOpen: () => void,
}

export function Sidepanel({ isOpen, toggleOpen }: SidepanelProps) { 
  return (
    <SidepanelContainer isOpen={isOpen}>
      <SidepanelClose onClick={toggleOpen} >
        <X size={24} />
      </SidepanelClose>

      <h2>Sacola de compras</h2>

      <section>
        <SidepanelItem>
          <img src="https://placehold.co/100x90/121214/c4c4cc" alt="" />
          <span>
            <h2>
              Camiseta Beyond the Limits
              <strong>R$ 79,00</strong>
            </h2>
            
            <button>Remover</button>
          </span>
        </SidepanelItem>
        <SidepanelItem>
          <img src="https://placehold.co/100x90/121214/c4c4cc" alt="" />
          <span>
            <h2>
              Camiseta Explorer
              <strong>R$ 62,90</strong>
            </h2>
            
            <button>Remover</button>
          </span>
        </SidepanelItem>
        <SidepanelItem>
          <img src="https://placehold.co/100x90/121214/c4c4cc" alt="" />
          <span>
            <h2>
              Camiseta Ignite Lab | ReactJS
              <strong>R$ 89,00</strong>
            </h2>
            
            <button>Remover</button>
          </span>
        </SidepanelItem>
      </section>

      <SidepanelFooter>
        <ul>
          <li>
            Quantidade
            <strong>3 itens</strong>
          </li>
          <li>
            Valor total
            <strong>R$ 270,00</strong>
          </li>
        </ul>

        <Button onClick={() =>{}} >
          Finalizar compra
        </Button>
      </SidepanelFooter>
    </SidepanelContainer>
  )
}