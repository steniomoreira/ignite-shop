import { MouseEvent, useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { useKeenSlider } from 'keen-slider/react'
import Link from "next/link";
import Head from "next/head";
import { Arrow } from "../components/Arrow";
import { CartButton } from "../components/Cart/CartButton";
import { ArrowContainer, HomeContainer, Product } from "../styles/pages/home";
import { Product as ProductType } from "../types/productType";
import { useCart } from "../hooks/useCart";

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
    products: ProductType[]
}

export default function Home({products}: HomeProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const { addCartItem, verifyExistsInCart} = useCart()

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            origin: currentSlide > 0 ?  "center" : 'auto',
            perView: 2,
            spacing: 48
        },
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel)
        },
        created() {
          setLoaded(true)
        },
    })

    function handleAddItemCart(event: MouseEvent<HTMLButtonElement>, product: ProductType ) {
        event.preventDefault();
        addCartItem(product);
    }

    return (
        <>
            <Head>
                <title>Home | Ignite Shop</title>
            </Head>
        
            <HomeContainer css={{maxWidth: currentSlide > 0 && '100%' }} >
                <div ref={sliderRef} className="keen-slider">
                    {products.map(product => (
                        <Link href={`/product/${product.id}`} key={product.id} prefetch={false} >
                            <Product className="keen-slider__slide">
                                <Image src={product.imageUrl} width={520} height={480} alt=""/>                               
                                
                                <footer>
                                    <p>
                                        <strong>{product.name}</strong>
                                        <span>{product.price}</span>
                                    </p>

                                    <CartButton 
                                        onClick={(event) => handleAddItemCart(event, product)}
                                        disabled={verifyExistsInCart(product.id)}
                                    />

                                </footer>
                            </Product>  
                        </Link>
                    ))}
                </div>

                {loaded && instanceRef.current && (
                    <ArrowContainer>
                        <Arrow
                            linearGradient="left"
                            handleClick={ event => event.stopPropagation() || instanceRef.current?.prev() }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            linearGradient="right"
                            handleClick={ event => event.stopPropagation() || instanceRef.current?.next() }                                
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </ArrowContainer>
                )}
            </HomeContainer>
        </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })    
    
    const products = response.data.map(product => {

        const price = product.default_price as Stripe.Price;

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(price.unit_amount as number / 100),
            numberPrice: price.unit_amount / 100,
            description: product.description,
            defaultPriceId: price.id,
        }
    })

    return {
        props: {
            products,
        },
        revalidate: 60 * 60 * 2 // 2 hours
    }    
}
