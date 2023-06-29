import type { AppProps } from 'next/app'
import Image from 'next/image';
import { HandbagButton } from '../components/HandbagButton';

import { globalStyle } from '../styles/global'
import { Container, HandbagContainer, Header, Sidepanel, SidepanelItem, SidepanelItemContainer } from '../styles/pages/app'

import logoImg from '../assets/logo.svg'
globalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>        
        <Header>
            <Image src={logoImg} alt="" />

            <HandbagContainer>
              <span>1</span>
              <HandbagButton color='gray' />
            </HandbagContainer>            
        </Header>
        
        <Sidepanel>
          <h2>Sacola de compras</h2>

          <SidepanelItemContainer>
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
        </Sidepanel>

        <Component {...pageProps} />

    </Container>
  )
}
