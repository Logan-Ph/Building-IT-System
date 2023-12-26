import { useEffect, useCallback, useState } from 'react';
import { Textarea } from "flowbite-react";

import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
export default function CustomerReview({ product, setComments, comments }) {
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [replyText, setReplyText] = useState('');

  const toggleCmt = (id) => {
    setActiveCommentId(prevId => prevId === id ? null : id);
  }

  const replyComment = async (commentId) => {
    try {
      const res = await axios.post(`http://localhost:4000/product/${commentId}/reply-comment`, { replyText: replyText }, { withCredentials: true });
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
      setReplyText('')
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (err) {
      toast.error(err.response.data.error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "light",
      });
      setReplyText('')
    }
  }

  const fetchComments = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/product/${product._id}/view-comment`, { withCredentials: true });
      setComments(res.data.comments);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  }, [product._id, setComments]);

  const likeComment = async (commentId) => {
    try {
      await axios.post(`http://localhost:4000/product/${commentId}/like`, {}, { withCredentials: true });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      toast.error(err.response.data.error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "light",
      });
    }
  }

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      {comments.length > 0 &&
        <article className="pt-8 ">
          <div className="flex-col lg:w-[800px] md:w-auto  bg-white border-b-2 border-r-2 border-gray-200 xs:px-0 sm:px-0 sm:py-4 md:px-4 rounded-lg sm:shadow-sm  mb-6">
            {comments.map((comment) => {
              const postedOnDate = new Date(comment.postedOn);
              const formattedDate = postedOnDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
              return (
                <>
                  <div class="flex items-center mb-2 xs:px-2 xs:pt-4">
                    {comment.userImg ? <img className="inline-block xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-8 sm:h-8 xs:w-5 xs:h-5 rounded-full object-fit ring-2 ring-white"
                      src={`data:image/jpeg;base64,${comment.userImg}`}
                      alt="avatar_img" /> : <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>}
                    <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                      <p>
                        {comment.userName}{" "}
                        <time
                          datetime="2014-08-16 19:00"
                          class="block text-sm text-gray-500 dark:text-gray-400"
                        >
                          {formattedDate}
                        </time>
                      </p>
                    </div>
                  </div>
                  <h3 class=" text-lg xs:text-md font-semibold text-gray-900 dark:text-white mb-2 xs:px-2">
                    {comment.title || "Thinking to buy another one!"}
                  </h3>
                  <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse xs:px-2">
                    {comment.raing > 0 && [...Array(comment.rating)].map((_, i) => (
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <p class="flex-1  text-sm  font-medium leading-relaxed xs:leading-normal text-gray-600 xs:px-2">
                    {comment.commentText}
                  </p>
                  <aside aside >
                    <div class="flex items-center mt-2">
                      <span
                        class="pe-4 text-sm font-medium text-gray-500 hover:underline border-gray-500 border-e  md:mb-0 xs:px-2 "
                      >
                        {comment.likes} people found this helpful
                      </span>
                      <button class="inline-flex items-center px-1  ml-1 flex-column" onClick={() => toggleCmt(comment._id)}>
                        <svg
                          class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                          viewBox="0 0 95 78"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </button>
                      <button class="inline-flex items-center px-1 -ml-1 flex-column" onClick={() => likeComment(comment._id)}>
                        <svg
                          class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/* NEW ADDED */}
                    <div className={activeCommentId === comment._id ? "" : "hidden"} id={comment._id}>
                      <div className='text-md xs:text-md font-semibold text-gray-900 dark:text-white mb-2 xs:px-2 mt-5'>Add Comment</div>
                      <div className=" mt-2" >
                        <Textarea
                          id="commentText"
                          placeholder="Write a Comment..."
                          required
                          rows={3}
                          className="mb-2 w-full"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)} />
                        <button class="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none font-medium rounded text-sm px-3 py-2 w-full text-center me-2 mt-2 mb-2" onClick={() => replyComment(comment._id)}>Post</button>
                      </div>
                    </div>
                    {comment.replyMessage && comment.replyMessage.map((reply) => {
                      const postedOnDate = new Date(reply.postedOn);
                      const formattedDate = postedOnDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                      return (
                        <>
                          <br />
                          <div class="flex flex-row pt-1 md-10 md:ml-16 mt-2 xs:pt-0 xs:mt-0  xs:px-2">
                            {reply.userImg || reply.vendorImg ? <img
                              class="w-12 h-12 border-2 border-gray-300 rounded-full"
                              alt="Vendor's avatar"
                              src={`data:image/jpeg;base64,${reply.userImg || reply.vendorImg}`}
                            /> : <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                              <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>}
                            <div class="flex-col mt-1 xs:px-2">
                              <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                                {reply.vendorBusinessName || reply.userName}
                                <span class="ml-2 text-xs font-normal text-gray-500">
                                  {formattedDate}
                                </span>
                              </div>
                              <div class="flex-1 px-2 ml-2 text-sm font-medium leading-relaxed xs:leading-normal text-gray-600">
                                {reply.replyText}
                              </div>
                            </div>
                          </div>
                        </>
                      )
                    })}
                    <hr class="my-4 w-full border-gray-300" />
                  </aside>
                </>
              )
            })}
          </div>
        </article >
      }
    </>
  );
}
