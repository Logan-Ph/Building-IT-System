export default function ForgotPwdPage(){
    return <>
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full p-6 rounded-lg shadow dark:border md:mt-0 sm:max-w-md bg-gray-50 border-gray-50 sm:p-8">
                        <div className="flex flex-row items-center">
                            <button className="border-black">
                                <a href="*" className="text-2xl text-[#E61E2A]">
                                    <i className="fa-solid fa-arrow-left"></i>
                                </a>
                            </button>
                            <h1 className="ml-10 text-2xl font-bold leading-tight tracking-tight text-[#000053] md:text-2xl">Forgot your password?</h1>
                        </div>
                        
                        <hr className="h-px my-5 bg-gray-300 border-0"></hr>
                        <p className="font-light text-gray-500">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-md font-medium text-gray-900">Your email</label>
                                <div className="mt-2">
                                    <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 shadow-md" placeholder="Enter your email address"/>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-500 rounded bg-white focus:ring-3 focus:ring-primary-300"/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="terms" className="font-light sm:text-sm text-md text-gray-900">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center my-5">
                                <button type="submit" className="flex w-1/2 justify-center rounded-md bg-[#222160] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#000053] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reset Password</button>

                                <div className="my-5">
                                    <label for="terms" className="font-light sm:text-sm text-md text-gray-900 text-center">If you still need help, contact <a className="font-medium text-[#E61E2A] hover:underline text-center" href="#">rBuy support.</a></label>
                                </div>
                            </div>

                            <a href="#" className="font-light sm:text-sm text-md text-gray-900 text-center cursor-pointer hover:font-bold">Go Back</a>
                        </form>

                    </div>
                </div>
            </div>
        </section>

    </>
}