import Image from "next/image";
import logoImg from '../../assets/logo.svg'
import Link from "next/link";
import { Cart } from "../Cart";
import { useRouter } from "next/router";

import { HeaderContainer } from "./styles";

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