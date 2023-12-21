import { Textarea } from "flowbite-react";
import { Rating } from "flowbite-react";
import {useState , useEffect  } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from 'react-router-dom'

export default function ProductDetailComment({ product }) {
    const textMessage = () => {
        document.getElementById("customer_review").className = "block";
    }
    const [comment, setComment] = useState([])
    const [commentText, setCommentText] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState('')
    const notify = (error) => {
        toast.error(error, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            pauseOnHover: false,
            theme: "light",
        });
    }
    useEffect(() => {
        if (error) {
            notify(error);
        }
    }, [error]);
    const postComment = async (productId, commentText) => {
        const commentData = { commentText: commentText}
        try {
          const response = await axios.post(`http://localhost:4000/product/${productId}/post-comment`, commentData,{ withCredentials: true } );
          setComment([...comment,response.data]);
          console.log(response.data)
        } 
        catch (error) {
          console.error("Error posting comment", error);
        }
      };   

    const handleComment = (e) => {
        e.preventDefault();
        postComment();
        if (error) {
            notify(error);
        }
    };
return (<div className="w-full lg:md:py-12 md:pr-2 xs:py-3">
        <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
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
                            id="commentText"
                            placeholder="Leave a review..."
                            required
                            rows={4}
                            value={commentText}
                            onChange={e => setCommentText(e.target.value)}/>                                     
                     <button
                        className="text-sm font-medium text-black text-center mx-auto"
                        onClick={handleComment} type="submit">
                        Post
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}