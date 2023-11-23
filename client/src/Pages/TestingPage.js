'use client';


import { useEffect } from 'react';
import { initFlowbite } from 'flowbite-react';
import { Rating } from 'flowbite-react';



export default function TestingPage() {
  return (
  <>
      

  <section className="text-gray-600 body-font overflow-hidden ">
  
<div className="container py-12 px-12 mx-auto mt-10 bg-gray-50 ">

  <div className="lg:w-5/5 px-14 mx-auto flex flex-wrap">
    <img alt="ecommerce" className="lg:w-1/2  w-full lg:h-auto h-64 object-cover object-center rounded shadow-md hover:shadow-2xl transition duration-500" src="https://m.media-amazon.com/images/I/716mmFt0PGL._AC_UL320_.jpg"  />
    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
    <nav className="flex mb-5">
    <ol className="flex items-center">
      <li className="text-left">
        <div className="-m-1">
          <a href="#" className="rounded-md p-1 text-md font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
        </div>
      </li>

      <li className="text-left">
        <div className="flex items-center">
          <span className="mx-2 text-gray-400">/</span>
          <div className="-m-1">
            <a href="#" className="rounded-md p-1 text-md font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </a>
          </div>
        </div>
      </li>

      <li className="text-left">
        <div className="flex items-center">
          <span className="mx-2 text-gray-400">/</span>
          <div className="-m-1">
            <a href="#" className="rounded-md p-1 text-md font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> Coffee </a>
          </div>
        </div>
      </li>
    </ol>
  </nav>
  <div>
  </div>
  <div className='px-3'>
      <h2 className="text-sm title-font text-gray-500 tracking-widest">VENDOR</h2>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate .</h1>
      <div className="flex mb-4">
        <span className="flex items-center">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#222160]" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#222160]" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#222160]" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#222160]" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#222160]" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <span className="text-gray-600 ml-3">4 Reviews</span>
        </span>
       
      </div>
      <div className="text-lg font-bold">Product Description:</div>
      <p className="leading-relaxed"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.</p>
      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        
        <div className="flex ml-6 items-center">
          <span className="mr-3">Size</span>
          <div className="relative">
            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
              <option>SM</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  </div>
</div>
  

</section>

<section className="container mx-auto ">



<div className='container py-12 px-12 mx-auto mt-10 bg-gray-50 '>
<Rating className="mb-2 ">
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
      </Rating>
      <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
      <Rating.Advanced percentFilled={70} className="mb-2  ">
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


</div>



{/* 
<div class="w-3/4 mx-auto">
        <div class="flex items-start mb-5">
            <div class="pe-4">
                <footer>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Reviewed: <time datetime="2022-01-20 19:00">January 20, 2022</time></p>
                </footer>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white">Spotless, good appliances, excellent layout, host was genuinely nice and helpful.</h4>
            </div>
            <p class="bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">8.7</p>
        </div>
        <p class="mb-2 text-gray-500 dark:text-gray-400">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting New York city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p>
        <p class="mb-5 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
        <aside class="flex items-center mt-3">
            <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                <svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                </svg>
                Helpful
            </a>
            <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group ms-5">
                <svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z"/>
                </svg>
                Not helpful
            </a>
        </aside>
    </div> */}

<div className="container px-12 mx-auto mb-10 mt-10 bg-gray-50">
<div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <h2 className="text-2xl font-bold tracking-tight text-gray-600 mb-8">Customers also purchased</h2>

  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <div className=" px-6 py-6 shadow-lg hover:shadow-2xl transition duration-500 bg-white">
      {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-1/2"> */}
        <img src="https://m.media-amazon.com/images/I/716mmFt0PGL._AC_UL320_.jpg" alt="" className="h-full w-full object-cover object-center lg:h-64 lg:w-full mt-2" />
      {/* </div> */}
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md font-semibold text-gray-700 line-clamp-1">
            <a href="#">
              Name
            </a>
          </h3>
          <p className="mt-1 text-md text-gray-500">Reviews</p>
        </div>
        <p className="text-md font-medium text-gray-900">$35</p>
      </div>
    </div>

    <div className=" px-6 py-6 shadow-lg hover:shadow-2xl transition duration-500 bg-white">
      {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-1/2"> */}
        <img src="https://m.media-amazon.com/images/I/716mmFt0PGL._AC_UL320_.jpg" alt="" className="h-full w-full object-cover object-center lg:h-64 lg:w-full mt-2" />
      {/* </div> */}
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md font-semibold text-gray-700 line-clamp-1">
            <a href="#">
              Name
            </a>
          </h3>
          <p className="mt-1 text-md text-gray-500">Reviews</p>
        </div>
        <p className="text-md font-medium text-gray-900">$35</p>
      </div>
    </div>

    <div className=" px-6 py-6 shadow-lg hover:shadow-2xl transition duration-500 bg-white">
      {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-1/2"> */}
        <img src="https://m.media-amazon.com/images/I/716mmFt0PGL._AC_UL320_.jpg" alt="" className="h-full w-full object-cover object-center lg:h-64 lg:w-full mt-2" />
      {/* </div> */}
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md font-semibold text-gray-700 line-clamp-1">
            <a href="#">
              Name
            </a>
          </h3>
          <p className="mt-1 text-md text-gray-500">Reviews</p>
        </div>
        <p className="text-md font-medium text-gray-900">$35</p>
      </div>
    </div>


    <div className=" px-6 py-6 shadow-lg hover:shadow-2xl transition duration-500 bg-white">
      {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-1/2"> */}
        <img src="https://m.media-amazon.com/images/I/716mmFt0PGL._AC_UL320_.jpg" alt="" className="h-full w-full object-cover object-center lg:h-64 lg:w-full mt-2" />
      {/* </div> */}
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md font-semibold text-gray-700 line-clamp-1">
            <a href="#">
              Name
            </a>
          </h3>
          <p className="mt-1 text-md text-gray-500">Reviews</p>
        </div>
        <p className="text-md font-medium text-gray-900">$35</p>
      </div>
    </div>
  </div>
</div>

</div>

</section>






  </>
  )
}