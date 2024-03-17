import { Textarea } from "flowbite-react";
import { Rating } from "flowbite-react";
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function ProductDetailComment({ product, setComments, user }) {
    const textMessage = () => {
        document.getElementById("customer_review").className = "block";
    }
    const [newComment, setNewComment] = useState('')
    const [title, setTitle] = useState('')

    const postComment = async () => {
        try {
            const res = await axios.post(`https://building-it-system-server.vercel.app/product/${product._id}/post-comment`, { newComment: newComment, title: title }, { withCredentials: true });
            toast.success(res.data.msg, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                pauseOnHover: false,
                theme: "light",
            });
            setComments((prev) => [...prev, {
                commentText: newComment,
                like: [],
                likes: 0,
                postedOn: new Date(),
                productId: product._id,
                replyMessage: [],
                userImg: user.img,
                userName: user.name,
                title: title,
                _id: res.data.commentId,
            }])
            setNewComment('')
            setTitle('')
        }
        catch (error) {
            toast.error(error.response.data.error, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                pauseOnHover: false,
                theme: "light",
            });
            setNewComment('')
            setTitle('')
        }
    };

    const handleComment = (e) => {
        e.preventDefault();
        postComment();
    };

    const customTheme = {
        "star": {
            "empty": "text-gray-300 dark:text-gray-300",
            "filled": "text-yellow-400",
            "sizes": {
                "sm": "w-5 h-5",
                "md": "w-7 h-7",
                "lg": "w-10 h-10"
            }

        },

        "base": "flex items-center",
        "label": "text-sm font-medium text-cyan-600 dark:text-cyan-600",
        "progress": {
            "base": "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-200",
            "fill": "h-5 rounded bg-yellow-400",
            "label": "text-sm font-medium text-cyan-600 dark:text-cyan-600"
        },

    }
    const customTheme1 = {  
            "base": "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
            "colors": {
              "gray": "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 ",
              "info": "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
              "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
              "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
              "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
            },
            "withShadow": {
              "on": "shadow-sm dark:shadow-sm",
              "off": ""
            }
          
          
    };

    return (<div className="w-full lg:md:py-12 md:pr-2 xs:py-3">
        <p className="lg:text-2xl md:text-2xl xs:text-xl font-semibold mb-2">
            Customer Reviews
        </p>
        <Rating size="mb-2"  theme={customTheme}>
            {[...Array(5)].map((_, i) => (
                <Rating.Star theme={customTheme} dkey={i} filled={i < Math.floor(product.ratings + 0.5)} className="!w-6 !h-6" />
            ))}
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {product.ratings} out of 5
            </p>
        </Rating>
        <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            {Number(product.no_of_ratings).toLocaleString()} global ratings
        </p>
        <Rating.Advanced theme={customTheme} percentFilled={70}  className="mb-2 ">
            5 star
        </Rating.Advanced>
        <Rating.Advanced theme={customTheme} percentFilled={17} className="mb-2">
            4 star
        </Rating.Advanced>
        <Rating.Advanced theme={customTheme} percentFilled={8} className="mb-2">
            3 star
        </Rating.Advanced>
        <Rating.Advanced theme={customTheme} percentFilled={4} className="mb-2">
            2 star
        </Rating.Advanced>
        <Rating.Advanced theme={customTheme} percentFilled={1}>1 star</Rating.Advanced>

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
                            placeholder="Title..."
                            required
                            rows={1}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="mb-2" 
                            theme={customTheme1}/>

                        <Textarea
                            id="commentText"
                            placeholder="Leave a review..."
                            required
                            rows={4}
                            value={newComment}
                            theme={customTheme1}
                            onChange={e => setNewComment(e.target.value)} />

                        <button class="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none font-medium rounded text-sm px-3 py-2 w-full text-center me-2 mt-2 mb-2" onClick={handleComment} type="submit">Post</button>
                    </div>


                </div>
            </div>
        </div>
    </div>)
}