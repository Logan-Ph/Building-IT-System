export default function Banner() {
    return (<div className="my-6 ">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-y-4 mx-auto">
            <div>
                <div className="mx-auto border border-[#FAC800] rounded-md px-2 py-3 flex items-center justify-around shadow-lg shadow-gray-100 hover:bg-[#fac800e1] w-3/4 transition">
                    <div className="w-12 h-12">
                        <img src={require("../Components/images/free.png")} className="object-cover" />
                    </div>

                    <div>
                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A] text-start">Free Shipping</h4>
                        <p className="text-[#000054] text-sm">order over $200</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="mx-auto border border-[#FAC800] rounded-md px-2 py-3 flex  items-center justify-around shadow-lg shadow-gray-100  hover:bg-[#fac800e1] transition w-3/4">
                    <img src={require("../Components/images/save-money.png")} className="w-12 h-12 object-contain" />
                    <div>
                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">Money Returns</h4>
                        <p className="text-[#000054] text-sm">30 days money return</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="mx-auto border border-[#FAC800] rounded-md px-2 py-3 flex items-center justify-around shadow-lg shadow-gray-100 hover:bg-[#fac800e1] transition w-3/4">
                    <div className='w-12 h-12'>
                        <img src={require("../Components/images/credit-card.png")} className="object-contain" />
                    </div>
                    <div>
                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">Security Payment</h4>
                        <p className="text-[#000054] text-sm">Protected by PayPal</p>
                    </div>
                </div>
            </div>


            <div>
                <div className="mx-auto border border-[#FAC800] rounded-md px-2 py-3 flex  items-center justify-around shadow-lg shadow-gray-100 hover:bg-[#fac800e1] transition w-3/4">
                    <div className='w-12 h-12'>
                        <img src={require("../Components/images/delivery.png")} className=" object-contain" />
                    </div>
                    <div>
                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">24/7 Support</h4>
                        <p className="text-[#000054] text-sm">Customer support</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}