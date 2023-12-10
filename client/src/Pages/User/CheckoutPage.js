import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import CheckoutInfo from "../../Components/CheckoutInfo"
import OrderSummary from "../../Components/OrderSummary";
import { UserImageContext } from "../../Context/UserImageContext";

export default function CheckoutPage() {
  const { user, setUser } = useContext(UserContext)
  const { setCart } = useContext(CartContext)
  const { setUserImage } = useContext(UserImageContext)
  const [products, setProducts] = useState()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [checkoutInfo, setCheckoutInfo] = useState({})
  let price = useRef(0);

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
      setUser(res.data.user);
      setCart(res.data.length)
      setUserImage(res.data.userImage)
      setError("")
      setIsLoading(false)
    } catch (er) {
      setError(er)
    }
  }, [setUser, setCart, setUserImage])

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/checkout", { withCredentials: true });
      setProducts(res.data.products)
      setCheckoutInfo(res.data.checkoutInfo)
    } catch (er) {
      setError(er)
    }
  }, [])


  useEffect(() => {
    products?.forEach((product) => {
      price.current += Number(product.price) * Number(product.quantity);
    });
  }, [products]);

  useEffect(() => {
    fetchUser();
    fetchData();
  }, [fetchUser, fetchData]);

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <>
      {error && <Navigate to={"/"} replace />}
      {user && user.role === "Vendor" && <Navigate to={'/dashboard'} replace />}
      <section>
        <div class="mx-auto px-10 my-10">
          <h1 class="text-center text-5xl">Checkout</h1>
          <div class="grid md:grid-cols-3 md:gap-5 my-3">
            <div class="md:col-span-2 row-span-2 my-3">
              <CheckoutInfo setCheckoutInfo={setCheckoutInfo} products={products} price={price} checkoutInfo={checkoutInfo} />
            </div>
            <div class="md:col-span-1">
              <OrderSummary checkoutInfo={checkoutInfo} price={price} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
