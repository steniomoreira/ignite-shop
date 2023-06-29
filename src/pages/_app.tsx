import type { AppProps } from 'next/app'
import Image from 'next/image';
import { HandbagButton } from '../components/HandbagButton';

import { globalStyle } from '../styles/global'
import { Container, HandbagContainer, Header } from '../styles/pages/app'

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
        <Component {...pageProps} />

    </Container>
  )
}
