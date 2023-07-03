
import { stripe } from "../../lib/stripe";
import { GetStaticPaths, GetStaticProps } from "next"
import Stripe from "stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from "next/image";
import Head from "next/head";
import { Product } from "../../types/productType";
import { Button } from "../../components/Button";
import { useCart } from "@/src/hooks/useCart";
import { useRouter } from "next/router";

interface ProductProps {
    product: Product;
}

export default function Product({ product }: ProductProps) {
    const { addCartItem, verifyExistsInCart } = useCart()

    const { isFallback } = useRouter()

    if (isFallback) {
        return <p>Loading...</p>
    }

    const AlreadyExistsInCart = verifyExistsInCart(product.id)

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>
                    <p>{product.description}</p>

                    <Button onClick={() => addCartItem(product)} disabled={AlreadyExistsInCart}>
                        {AlreadyExistsInCart ? 'Item já está no carrinho' : 'Colocar na sacola'}
                    </Button>
               
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    return {
        paths: [
            { params: {id: 'prod_NqD4W6hGqTufPD'}}
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            product: {
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
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}