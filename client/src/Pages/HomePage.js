import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function Homepage() {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchProduct();
        fetchUser()
    }, [])

    const fetchProduct = async () => {
        await axios.get("http://localhost:4000/", { withCredentials: true })
            .then(res => {
                setProducts(res.data.product)
            })
            .catch(er => console.log(er))
    }

    const fetchUser = async () => {
        await axios.get("http://localhost:4000/login/success", { withCredentials: true })
            .then(res => {
                setUser(res.data.user)
                setIsLoading(false)
            })
            .catch(er => {
                console.log(er)
                setIsLoading(false)
            })
    }

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (
        <>
            {!user && <Navigate to="/login" replace={true} />}
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