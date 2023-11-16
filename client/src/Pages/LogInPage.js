import axios from 'axios'
import { useState, useEffect } from 'react'
// import {useNavigate} from 'react-router-dom'


export default function LogInPage() {
    // const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/login');
            setData(res.data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
            fetchData();
        }, []);

    const axiosPostData = async () => {
        try {
            const postData = {
                username: username,
                password: password,
            };
            await axios.post('http://localhost:4000/login', postData, {withCredentials: true});
        } catch (error) {
            setError('Please check your username and password'); 
            console.error('Login failed:', error.response ? error.response.data : error.message);
        }
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosPostData();
    };


    return (
        <>
            <section className="bg-white ">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Sign In</h2>
                    <p className="mb-5 lg:mb-7 font-light text-center text-gray-500 sm:text-xl">Welcome back, We hope you have a great day!</p>

                    <div className="p-4 rounded-lg bg-gray-50">
                        <form  name="SignIn" className="space-y-6">
                     
                            <div>
                                <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                <div className="mt-2">
                                    <input type="text" id="username" name="username" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#222160] sm:text-sm sm:leading-6" aria-describedby="usernameHelp" title="Username must contain only letters (lower and upper case) and digits, has a length from 8 to 15 characters" onChange={e => setUsername(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#222160] sm:text-sm sm:leading-6" aria-describedby="usernameHelp" title="Password must contain at least one upper case letter, at least one lower case letter, at least one digit, at least one special letter, has a length from 8 to 20 characters." onChange={e => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between items-center">
                                <div>
                                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " />
                                    <label className="ms-2 text-sm font-medium text-gray-900 ">Remember Me</label>
                                </div>
                                <div>
                                    <a href="/" className="ms-2 text-sm font-medium text-blue-600 hover:underline">Forgot password?</a>
                                </div>
                            </div>
                            <div>
                                    {error && <p className="text-red-500">{error}</p>} 
                                <button type="submit" onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-[#222160] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#000053] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
                            </div>
                            <div className="relative flex mt-3 items-center">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <span className="flex-shrink mx-2 text-gray-400">OR</span>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                            <div className="mt-4">
                                <button className="border-2 flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 gap-2 w-full hover:bg-transparent hover:text-indigo-600" >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                    Sign in with Google</button>
                            </div>
                            <div className="mt-4">
                                <button className="border-2 flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 gap-2 w-full hover:bg-transparent hover:text-indigo-600" >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                        <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                                    </svg>
                                    Sign in with Facebook</button>
                            </div>
                            <div className="mt-6 flex justify-center items-center gap-1">
                                <p className="font-medium text-base">Don't have an account yet?</p>
                                <button href="#" className="font-semibold leading-6 text-[#222160] hover:text-[#000053]" >Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}