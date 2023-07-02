import Link from "next/link";
import { ImageContainer, ImageWrapper, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
    customerName: string,
    product: {
        name: string
        imageUrl: string,
    }
}

export default function Success({ customerName, product }: SuccessProps) {
    return (
        <>
             <Head>
                <title>Compra efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <ImageContainer>
                    <ImageWrapper>
                        <Image src={product.imageUrl} width={120} height={120} alt="" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src={product.imageUrl} width={120} height={120} alt="" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src={product.imageUrl} width={120} height={120} alt="" />
                    </ImageWrapper>
                </ImageContainer>

                <h1>Compra efetuada!</h1>

                <p>
                    Uhuul <strong>{customerName}</strong>, sua compra de 3 camisetas já está a caminho de sua casa.
                </p>

                <Link href='/'>
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product'],
    })

    const customerName = session.customer_details.name;
    const product = session.line_items.data[0].price.product as Stripe.Product

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0],
            }
        }
    }
}