import { useCallback, useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";
import axios from "axios";
import CheckoutInfo from "../Components/CheckoutInfo"
import OrderSummary from "../Components/OrderSummary";

export default function CheckoutPage() {
  const { setUser } = useContext(UserContext)
  const { setCart } = useContext(CartContext)

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
      setUser(res.data.user);
      setCart(res.data.length)
    } catch (er) {
      console.log(er);
    }
  }, [setUser, setCart])

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <section>
        <div class="mx-auto px-10 my-10">
          <h1 class="text-center text-5xl">Checkout</h1>
          <div class="grid md:grid-cols-3 md:gap-5 my-3">
            <div class="md:col-span-2 row-span-2 my-3">
              <CheckoutInfo />
            </div>
            <div class="md:col-span-1">
              <OrderSummary />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
