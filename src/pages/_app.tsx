import { useState } from 'react';
import type { AppProps } from 'next/app'
import { X } from "@phosphor-icons/react";
import Image from 'next/image';
import { HandbagButton } from '../components/HandbagButton';
import { Button } from '../components/Button';

import { Container, HandbagContainer, Header, Sidepanel, SidepanelClose, SidepanelFooter, SidepanelItem, SidepanelItemContainer } from '../styles/pages/app'
import { globalStyle } from '../styles/global'

import logoImg from '../assets/logo.svg'

globalStyle()

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleOpen() {
    setIsOpen(prev => !prev)
  }

  return (
    <Container>        
        <Header>
            <Image src={logoImg} alt="" />

            <HandbagContainer>
              <span>1</span>
              <HandbagButton color='gray' onClick={toggleOpen}  />
            </HandbagContainer>            
        </Header>
        
        <Sidepanel isOpen={isOpen}>
          <SidepanelClose onClick={toggleOpen} >
            <X size={24} />
          </SidepanelClose>

          <SidepanelItemContainer>
           <h2>Sacola de compras</h2>

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
          </SidepanelItemContainer>

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
        </Sidepanel>

        <Component {...pageProps} />

    </Container>
  )
}
