import axios from 'axios'
import { useState } from 'react'

export default function ResetPassword() {
    

    return (<>
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full p-6 bg-gray-50 border-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
                        <h2 className="mb-1 text-2xl font-bold leading-tight tracking-tight text-[#000053] md:text-xl">Password Reset</h2>
                        <p className="my-2 text-md font-light leading-tight tracking-tight text-gray-900 md:text-sm">Your New Password should different from Old Password</p>

                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 shadow-md" placeholder="Enter your email address" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">New Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 shadow-md" />
                            </div>
                            <div>
                                <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 shadow-md" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="newsletter" className="font-light text-gray-900">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center my-5">
                                <button type="submit" className="flex w-1/2 justify-center rounded-md bg-[#222160] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#000053] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save New Password</button>

                                <div className="my-5">
                                    <label for="terms" className="font-light sm:text-sm text-md text-gray-900 text-center">Back to <a className="font-medium text-[#E61E2A] text-md hover:underline text-center" href="#">Login</a></label>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>)
}