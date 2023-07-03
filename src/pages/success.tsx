import Link from "next/link";
import { ImageContainer, ImageWrapper, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
    customerName: string,
    productsImages: string[]
}

export default function Success({ customerName, productsImages }: SuccessProps) {
    const imagesTotal = productsImages?.length;

    return (
        <>
             <Head>
                <title>Compra efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <ImageContainer>

                    {productsImages?.map( images => (

                        <ImageWrapper key={images}>
                            <Image src={images} width={120} height={120} alt="" />
                        </ImageWrapper>
                    ))}
                </ImageContainer>

                <h1>Compra efetuada!</h1>

                <p>
                    Uhuul <strong>{customerName}</strong>,{' '}
                    sua compra de {imagesTotal} camiseta{imagesTotal === 1 ? ' já está': 's já estão'} a caminho de sua casa.
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
    const productsImages = session.line_items.data.map(item => {
        const product = item.price.product as Stripe.Product;
        
        return product.images[0]
    })

    return {
        props: {
            customerName,
            productsImages,
        }
    }
}