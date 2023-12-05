import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import CheckoutInfo from "../Components/CheckoutInfo"
import OrderSummary from "../Components/OrderSummary";
import { ToastContainer, toast } from "react-toastify";

export default function CheckoutPage() {
  const { setUser } = useContext(UserContext)
  const { setCart } = useContext(CartContext)
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')

  const notify = useCallback(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "light",
      });
    }

    if (msg) {
      toast.success(msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "light",
      });
    }
  }, [error, msg]);

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
      setUser(res.data.user);
      setCart(res.data.length)
      setError("")
    } catch (er) {
      setError(er)
    }
  }, [setUser, setCart])

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (error || msg) {
      notify();
    }
  }, [error, msg, notify]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      {error && <Navigate to={"/"} replace />}
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
