import { useParams } from "react-router-dom"
import { signal, effect } from "@preact/signals";
import axios from "axios"
import { RelatedProducts } from '@algolia/recommend-react'
import recommend from '@algolia/recommend'

export default function ProductPage() {
    const params = useParams()
    const product = signal([])
    const recommendClient = recommend('IZX7MYSNRD', 'd8ac69cc1ecc43ac91c32ca6d0fb4305');
    const indexName = 'rBuy';

    effect(async () => {
        try {
            const res = await axios.get(`http://localhost:4000/product/${params.id}`);
            product.value = [...product.value, res.data];
        } catch (error) {
            console.log(error);
        }
    })

    function RelatedItem({ item }) {
        return (
            <>
                <p>{item.product_name}</p>
                <img src={item.image_link} alt={item.product_name} />
                <p>price {item.price}</p>
                <a href={`http://localhost:3000/product/${item.objectID}`}>View Product</a>
            </>
        );
    }

    return (
        <>
            <p>
                This is product page
            </p>
            <p>
                {product.value.forEach((prd) => {
                    return (
                        <>
                            <p>{prd.product_name}</p>
                            <img src={prd.image_link} alt={prd.product_name} />
                            <p>price {prd.price}</p>
                        </>
                    )
                })}

            </p>
            <p>related products</p>
            <RelatedProducts
                recommendClient={recommendClient}
                maxRecommendations={10}
                indexName={indexName}
                objectIDs={[params.id]}
                itemComponent={RelatedItem}
            />
        </>
    )
}