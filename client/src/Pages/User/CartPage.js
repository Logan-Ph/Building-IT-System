export default function CartPage() {
  return (
    <>
      <div class="text-center text-3xl my-5 sticky top-0">
        Shopping Cart <span class="text-xl">(2)</span>
      </div>
      <div class="md:container mx-auto md:px-6 px-2">
        <div class="grid md:grid-cols-3 md:gap-5 my-3">
          <div class="md:col-span-2 row-span-2">
            <div class="">
              <div class="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mb-2">
                {/* Test */}
                <div class="flex-1 overflow-y-auto py-6 sm:px-6">
                  <div class="">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
                        <li class="flex py-6">
                          <div>
                            <input
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              class="w-5 h-5 text-black bg-gray-100 border-gray-300 rounded mr-3"
                            />
                          </div>
                          {/* <div class="order-product-img">
                            <img
                              src={require("../../Components/images/chair.jpg")}
                              alt=""
                            />
                          </div> */}
                          <div class="ml-4 flex flex-1 flex-col">
                            <div class="flex md:flex-row justify-between text-base font-medium text-gray-900 flex-col">
                              <h3>
                                <a href="#">Chair</a>
                              </h3>
                              <p class="md:ml-4">$90.00</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                              <div class="relative flex items-center max-w-[7rem]">
                                <button
                                  type="button"
                                  id="decrement-button"
                                  data-input-counter-decrement="quantity-input"
                                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-6 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                                >
                                  <svg
                                    class="w-2 h-2 text-gray-900"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 2"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M1 1h16"
                                    />
                                  </svg>
                                </button>
                                <input
                                  type="text"
                                  id="quantity-input"
                                  data-input-counter
                                  aria-describedby="helper-text-explanation"
                                  class="bg-gray-50 border-x-0 border-gray-300 h-6 w-full text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2.5"
                                  placeholder="1"
                                  required
                                />
                                <button
                                  type="button"
                                  id="increment-button"
                                  data-input-counter-increment="quantity-input"
                                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-6 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                                >
                                  <svg
                                    class="w-2 h-2 text-gray-900"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M9 1v16M1 9h16"
                                    />
                                  </svg>
                                </button>
                              </div>

                              <div class="flex">
                                <button
                                  type="button"
                                  class="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="flex py-6">
                          {/* <div class="md:h-44 md:w-44 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={require("../../Components/images/chair.jpg")}
                                  alt=""
                                  class="h-full w-full object-cover object-center"
                                />
                              </div> */}
                          <div>
                            <input
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              class="w-5 h-5 text-black bg-gray-100 border-gray-300 rounded mr-3"
                            />
                          </div>
                          {/* <div class="order-product-img">
                            <img
                              src={require("../../Components/images/chair.jpg")}
                              alt=""
                            />
                          </div> */}
                          <div class="ml-4 flex flex-1 flex-col">
                            <div class="flex md:flex-row justify-between text-base font-medium text-gray-900 flex-col">
                              <h3>
                                <a href="#">Chair</a>
                              </h3>
                              <p class="md:ml-4">$90.00</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                              <div class="relative flex items-center max-w-[7rem]">
                                <button
                                  type="button"
                                  id="decrement-button"
                                  data-input-counter-decrement="quantity-input"
                                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-6 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                                >
                                  <svg
                                    class="w-2 h-2 text-gray-900"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 2"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M1 1h16"
                                    />
                                  </svg>
                                </button>
                                <input
                                  type="text"
                                  id="quantity-input"
                                  data-input-counter
                                  aria-describedby="helper-text-explanation"
                                  class="bg-gray-50 border-x-0 border-gray-300 h-6 w-full text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2.5"
                                  placeholder="1"
                                  required
                                />
                                <button
                                  type="button"
                                  id="increment-button"
                                  data-input-counter-increment="quantity-input"
                                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-6 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                                >
                                  <svg
                                    class="w-2 h-2 text-gray-900"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M9 1v16M1 9h16"
                                    />
                                  </svg>
                                </button>
                              </div>

                              <div class="flex">
                                <button
                                  type="button"
                                  class="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* <!-- More products... --> */}
                      </ul>
                    </div>
                  </div>
                </div>

                {/*  */}
              </div>
            </div>
          </div>
          <div class="md:col-span-1">
            <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mb-2">
              <div class="container mb-3">
                <div class="text-3xl font-bold my-3">Order Summary</div>
                <div class="flex items-center justify-between">
                  <span class="text-lg text-gray-900">Items:</span>
                  <span class="text-lg text-gray-900">5</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-lg text-gray-900">Subtotal:</span>
                  <span class="text-lg text-gray-900">$199</span>
                </div>
                <div class="my-5">
                  <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-[#222160] px-3 py-1.5 text-lg font-medium leading-6 text-white shadow-sm hover:bg-[#000053] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000053]"
                  >
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
