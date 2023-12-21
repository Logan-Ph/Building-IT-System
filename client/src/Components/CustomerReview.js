import {useState , useEffect  } from 'react';
// import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// import { Navigate } from 'react-router-dom'

export default function CustomerReview() {
  const [comment, setComment] = useState('')
//   const [error,setError]= useState[''];
//   const notify = (error) => {
//     toast.error(error, {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         draggable: true,
//         progress: undefined,
//         pauseOnHover: false,
//         theme: "light",
//     });
// }

// useEffect(() => {
//     if (error) {
//         notify(error);
//     }
// }, [error]);
//   const replyToComment = async (commentId, replyData) => {
//     try {
//       const response = await axios.put(`http://localhost:4000/${commentId}/reply-comment`, replyData);
//       return response.data;
//     } catch (error) {
//       console.error("Error replying to comment", error);
//     }
// };
// const handleReply = (e) => {
//   e.preventDefault();
//   replyToComment();
//   if (error) {
//       notify(error);
//   }
// };
  
  return (
    <>
      <article className="pt-8 ">
        <div className="flex-col lg:w-[800px] md:w-auto  bg-white border-b-2 border-r-2 border-gray-200 xs:px-0 sm:px-0 sm:py-4 md:px-4 rounded-lg sm:shadow-sm  mb-6">
          <div class="flex items-center mb-2 xs:px-2 xs:pt-4">
            <img
              class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
              alt="customer's avatar"
              src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
            />
            <div class="flex items-center flex-1 px-4 font-bold leading-tight">
              <p>
                Customer 1{" "}
                <time
                  datetime="2014-08-16 19:00"
                  class="block text-sm text-gray-500 dark:text-gray-400"
                >
                  Joined on August 2014
                </time>
              </p>
            </div>
          </div>
          <h3 class=" text-lg xs:text-md font-semibold text-gray-900 dark:text-white mb-2 xs:px-2">
            Thinking to buy another one!
          </h3>
          <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse xs:px-2">
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <div class="text-sm xs:text-xs text-gray-500 px-4">
              <p>Reviewed on March 3, 2017</p>
            </div>
          </div>

          <p class="flex-1  text-sm  font-medium leading-relaxed xs:leading-normal text-gray-600 xs:px-2">
            This is my third Invicta Pro Diver. They are just fantastic value
            for money. This one arrived yesterday and the first thing I did was
            set the time, popped on an identical strap from another Invicta and
            went in the shower with it to test the waterproofing.... No
            problems.
          </p>

          <aside>
            <div class="flex items-center mt-2">
              <a
                href="#"
                class="pe-4 text-sm font-medium text-gray-500 hover:underline border-gray-500 border-e  md:mb-0 xs:px-2 "
              >
                19 people found this helpful
              </a>
              <button class="inline-flex items-center px-1  ml-1 flex-column">
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
              <button class="inline-flex items-center px-1 -ml-1 flex-column">
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
            <hr class="my-4 w-full border-gray-300" />

            {/* comment  */}
            <div class="flex flex-row pt-1 md-10 md:ml-16 mt-2 xs:pt-0 xs:mt-0  xs:px-2">
              <img
                class="w-12 h-12 border-2 border-gray-300 rounded-full"
                alt="Vendor's avatar"
                src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
              />
              <div class="flex-col mt-1 xs:px-2">
                <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                  Vendor
                  <span class="ml-2 text-xs font-normal text-gray-500">
                    5 days ago
                  </span>
                </div>
                <div class="flex-1 px-2 ml-2 text-sm font-medium leading-relaxed xs:leading-normal text-gray-600">
                  Thank you for your feedback!
                </div>
                <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
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
                <button class="inline-flex items-center px-1 -ml-1 flex-column">
                  <svg
                    class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
