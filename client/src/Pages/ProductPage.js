import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
import { RelatedProducts } from '@algolia/recommend-react'
import recommend from '@algolia/recommend'
import { Navigate } from 'react-router-dom'


export default function ProductPage() {
    const params = useParams()
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const recommendClient = recommend('IZX7MYSNRD', 'd8ac69cc1ecc43ac91c32ca6d0fb4305');
    const indexName = 'rBuy';

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/product/${params.id}`, { withCredentials: true });
            setProduct(res.data.product);
            setIsLoading(false)
            console.log(product)
        } catch (error) {
            console.log(error);
        }
    }

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

    if (isLoading){
        return <div>Loading....</div>
    }

    return (
        <>  
            {console.log(product.length())}
            {(product.length ===0) && <Navigate to="/login" replace={true} />}
            <p>
                This is product page
            </p>
            <p>{product.product_name}</p>
            <img src={product.image_link} alt={product.product_name} />
            <p>price {product.price}</p>
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