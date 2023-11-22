import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'


export default function VerifyEmailPage() {
    const params = useParams();
    const [msg, setMsg] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await axios.get(`http://localhost:4000/user/${params.token}/verify-email`, { withCredentials: true })
            .then(res => setMsg(res.data))
            .catch(er => setError(er))
    }


    return <>
        {error && <Navigate to={'/login'} replace={true} />}
        {msg && <Navigate to={'/'} replace={true} />}
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <div className="flex flex-col items-center bg-gray-50 py-10 border-gray-50 shadow-md">
                    <div className="w-1/3 h-full">
                        <img src={require("../Components/images/verify.png")} className="object-cover" />
                    </div>
                    <p className="font-bold text-4xl uppercase my-5">Email Verified</p>
                    <p className="font-light text-lg text-gray-900">Your email has been successfully verified.</p>
                    <p className="font-light text-lg text-gray-900 mb-5">You can now navigate to the login page by clicking the button below. </p>

                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 focus:outline-non"> <a href='/login'>Login</a></button>

                    <div className="flex flex-row items-center">
                        <div className="text-gray-900 text-lg font-medium">
                            <a href="/login">
                                <i class="fa-solid fa-arrow-left"></i>
                            </a>
                        </div>

                        <div className="ml-5">
                            <label for="terms" className="font-light sm:text-sm text-md text-gray-900 text-center">Back to <a className="font-medium text-gray-900 hover:underline text-center" href="/register">SignUp</a></label>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
}