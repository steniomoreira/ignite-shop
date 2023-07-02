import Image from "next/image";
import { HeaderContainer } from "./styles";

import logoImg from '../../assets/logo.svg'
import Link from "next/link";
import { Cart } from "../Cart";
import { useRouter } from "next/router";

export function Header() {
  const { pathname } = useRouter();

  const isSuccessRouter = pathname === '/success';  

  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} alt="" />      
      </Link>

      {!isSuccessRouter && (
        <Cart />
      )}

    </HeaderContainer>
  )
}