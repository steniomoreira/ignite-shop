
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {

    const {query} = useRouter()
    return (
        <ProductContainer>
            <ImageContainer></ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo neque reiciendis magni consequuntur accusamus at. Autem officia placeat, aliquid, omnis distinctio, quis ex dolore architecto iure sapiente exercitationem sunt corporis?</p>
            
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}