import { Textarea } from "flowbite-react";
import { Rating } from "flowbite-react";


export default function ProductDetailComment({ product }) {
    const textMessage = () => {
        document.getElementById("customer_review").className = "block";
    }

    return (<div className="w-full lg:md:py-12 md:pr-2 xs:py-3">
        <p className="lg:text-2xl md:text-2xl xs:text-xl font-semibold mb-2">
            Customer Reviews
        </p>
        <Rating className="mb-2 ">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {product.ratings} out of 5
            </p>
        </Rating>
        <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            {Number(product.no_of_ratings).toLocaleString()} global ratings
        </p>
        <Rating.Advanced percentFilled={70} className="mb-2 ">
            5 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={17} className="mb-2">
            4 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={8} className="mb-2">
            3 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={4} className="mb-2">
            2 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>

        <hr class="my-6 w-4/5 border-gray-300" />
        <div>
            <p className="lg:text-2xl md:text-2xl xs:text-xl font-semibold mb-1 ">
                Review This Product
            </p>
            <p className="text-md xs:text-sm font-normal">
                Share your thoughts with other customers
            </p>
            <div className=" flex cursor-pointer rounded-lg border border-slate-300 h-9 lg:md:w-[300px] xs:sm:w-auto hover:bg-slate-200 items-center mt-3 bg-white">
                <button
                    className="text-sm font-medium text-black text-center mx-auto"
                    onClick={textMessage}
                >
                    Write a customer review
                </button>
            </div>

            <div className="lg:md:w-96 mt-5 ">
                <div className="">
                    <div className="hidden mt-2" id="customer_review">
                        <Textarea
                            id="comment"
                            placeholder="Leave a review..."
                            required
                            rows={4}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}