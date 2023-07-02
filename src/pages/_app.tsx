import type { AppProps } from 'next/app'
import { Container} from '../styles/pages/app'
import { globalStyle } from '../styles/global'
import { Header } from '../components/Header';

globalStyle()

export default function App({ Component, pageProps }: AppProps) { 
  return (
    <Container>       
        <Header />
        <Component {...pageProps} />
    </Container>
  )
}
