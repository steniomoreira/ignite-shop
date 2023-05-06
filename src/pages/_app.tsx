import type { AppProps } from 'next/app'
import { globalStyle } from '../styles/global'

import Image from 'next/image';
import { Container, Header } from '../styles/pages/app'

import logoImg from '../assets/logo.svg'
globalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
        
        <Header>
            <Image src={logoImg} alt="" />
        </Header>
        <Component {...pageProps} />

    </Container>
  )
}
