import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Homepage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await axios.get("http://localhost:4000/")
            .then(res => setProducts([res.data]))
            .catch(er => console.log(er))
    }

    return (
        <>
            <p>
                Home
            </p>
            <p>products</p>
            {products.map(product => (
                <>
                    <p>{product.product_name}</p>
                    <img src={product.image_link} alt={product.product_name} />
                    <p>price {product.price}</p>
                    <a href={`http://localhost:3000/product/${product._id}`}>View Product</a>
                </>
            ))}
        </>
    )
}