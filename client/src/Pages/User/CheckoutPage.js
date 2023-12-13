import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import CheckoutInfo from "../../Components/CheckoutInfo"
import OrderSummary from "../../Components/OrderSummary";

export default function CheckoutPage() {
  const { user } = useContext(UserContext)
  const [products, setProducts] = useState()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [checkoutInfo, setCheckoutInfo] = useState({})

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/checkout", { withCredentials: true });
      setCheckoutInfo(res.data.checkoutInfo)
      setIsLoading(false)
    } catch (er) {
      setError(er)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData();
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, [fetchData]);

  if (user === undefined || isLoading) {
    return <div>Loading....</div>
  }

  return (
    <>
      {error && <Navigate to={"/"} replace />}
      {user && user.role === "Vendor" && <Navigate to={'/dashboard'} replace />}
      {user && user.role === "Admin" && <Navigate to={'/admin/manage-user'} replace />}
      <section>
        <div class="mx-auto px-10 my-10">
          <h1 class="text-center text-5xl">Checkout</h1>
          <div class="grid md:grid-cols-3 md:gap-5 my-3">
            <div class="md:col-span-2 row-span-2 my-3">
              <CheckoutInfo setCheckoutInfo={setCheckoutInfo} products={products} price={products.reduce((total, product) => product.checked ? total + product.price * product.quantity : total, 0)} checkoutInfo={checkoutInfo} />
            </div>
            <div class="md:col-span-1">
              <OrderSummary checkoutInfo={checkoutInfo} products={products} price={products.reduce((total, product) => product.checked ? total + product.price * product.quantity : total, 0)} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
