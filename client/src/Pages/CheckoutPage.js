export default function CheckoutPage() {
  return (
    <>
      <section>
        <div class="mx-auto px-10 my-10">
          <h1 class="text-center text-5xl">Checkout</h1>
          <div class="grid md:grid-cols-3 md:gap-5 my-3">
            <div class="md:col-span-2 row-span-2 my-3">
              <div
                id="accordion-open"
                data-accordion="open"
                data-active-classes="bg-white text-gray-900"
                data-inactive-classes="text-gray-500"
              >
                <h2 id="accordion-open-heading-1">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b-2 border-gray-400 gap-3"
                    data-accordion-target="#accordion-open-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-open-body-1"
                  >
                    <span class="text-xl font-bold">Shipping address</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-open-body-1"
                  class="hidden"
                  aria-labelledby="accordion-open-heading-1"
                >
                  <div class="py-5 border-b-2 border-gray-400">
                    <form class="border-gray-200 my-4 p-4 rounded-lg bg-gray-50">
                      <div class="space-y-6">
                        <div>
                          <label
                            for="full_name"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Full name
                          </label>
                          <input
                            type="text"
                            id="full_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="phone"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Phone number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="(+84)"
                            pattern="^(\+84)?[0-9]{8,}$"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="city"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              for="district"
                              class="block mb-2 text-sm font-medium text-gray-900"
                            >
                              District
                            </label>
                            <input
                              type="text"
                              id="district"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="ward"
                              class="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Ward
                            </label>
                            <input
                              type="text"
                              id="ward"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="streetAddress"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Street address
                          </label>
                          <input
                            type="text"
                            id="streetAddress"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div class="flex items-start mb-6">
                          <div class="flex items-center h-5">
                            <input
                              id="remember"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                              required
                            />
                          </div>
                          <label
                            for="remember"
                            class="ms-2 text-sm font-medium text-gray-900"
                          >
                            Remember this address for future orders
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <h2 id="accordion-open-heading-2">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b-2 border-gray-400"
                    data-accordion-target="#accordion-open-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-open-body-2"
                  >
                    <span class="text-xl font-bold">Payment method</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-open-body-2"
                  class="hidden"
                  aria-labelledby="accordion-open-heading-2"
                >
                  <div class="py-5 border-b-2 border-gray-400">
                    <div>
                      <ul
                        id="default-tab"
                        data-tabs-toggle="#default-tab-content"
                        role="tablist"
                      >
                        <li class="my-2">
                          <input
                            type="radio"
                            id="COD"
                            name="paymentMethod"
                            value="COD"
                            class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            data-tabs-target="#cod"
                            role="tab"
                            aria-controls="cod"
                            aria-selected="false"
                            checked
                          />
                          <label for="COD" class="font-semibold">
                            Cash On Delivery (COD)
                          </label>
                        </li>
                        <li class="me-2 my-5" role="presentation">
                          <input
                            type="radio"
                            id="creditCard"
                            name="paymentMethod"
                            value="creditCard"
                            class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            data-tabs-target="#card"
                            role="tab"
                            aria-controls="card"
                            aria-selected="false"
                          />
                          <label for="creditCard" class="font-semibold">
                            Card
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div id="default-tab-content">
                      <div
                        class="hidden"
                        id="cod"
                        role="tabpanel"
                        aria-labelledby="cod-tab"
                      ></div>
                      <div
                        class="hidden p-4 rounded-lg bg-gray-50 border-gray-200"
                        id="card"
                        role="tabpanel"
                        aria-labelledby="card-tab"
                      >
                        <form>
                          <div class="space-y-6">
                            <div>
                              <label
                                for="cardNumber"
                                class="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Card number
                              </label>
                              <input
                                type="number"
                                id="cardNumber"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                              />
                            </div>
                            <div>
                              <label
                                for="cardName"
                                class="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Name on card
                              </label>
                              <input
                                type="text"
                                id="cardName"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                              />
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                              <div>
                                <label
                                  for="cardDate"
                                  class="block mb-2 text-sm font-medium text-gray-900"
                                >
                                  Expiration Date
                                </label>
                                <input
                                  type="number"
                                  id="cardNumber"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                  placeholder="MM/YY"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  for="cardCVC"
                                  class="block mb-2 text-sm font-medium text-gray-900"
                                >
                                  CVC
                                </label>
                                <input
                                  type="number"
                                  id="cardCVC"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 id="accordion-open-heading-3">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b-2 border-gray-400 gap-3"
                    data-accordion-target="#accordion-open-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-open-body-3"
                  >
                    <span class="text-xl font-bold">Review your order</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-open-body-3"
                  class="hidden"
                  aria-labelledby="accordion-open-heading-3"
                >
                  <div class="py-5 border-b-2 border-gray-400">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mb-2">
                      <div class="container mb-3">
                        <div class="order-shop py-3 text-xl font-bold">
                          Radiant Beauty
                        </div>
                        <div class="order-content">
                          <div class="checkout order-details">
                            <div class="order-columns">
                              <div class="order-info-product px-3">
                                {/* Product Name */}
                                <span class="text-lg font-semibold text-gray-900">
                                  Ofelia
                                </span>
                                {/* Product category */}
                                <p class="text-base">Color: Red</p>
                                <br />
                                {/* Product price and quantity */}
                                <div class="flex items-center justify-between">
                                  <span class="text-base font-bold text-gray-900">
                                    $599
                                  </span>
                                  <span class="text-base font-bold text-gray-900">
                                    x9
                                  </span>
                                </div>
                              </div>
                              <div class="order-product-img">
                                <img
                                  alt=""
                                  src={require("../Components/images/logo1.png")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr class="h-px my-5 border-0 bg-gray-700" />
                        <div class="order-total mb-3 text-right font-semibold">
                          Total: $70
                        </div>
                      </div>
                    </div>

                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mb-2">
                      <div class="container mb-3">
                        <div class="order-shop py-3 text-xl font-bold">
                          Radiant Beauty
                        </div>
                        <div class="order-content">
                          <div class="checkout order-details">
                            <div class="order-columns">
                              <div class="order-info-product px-3">
                                <span class="text-lg font-semibold text-gray-900">
                                  Ofelia
                                </span>
                                <p class="text-base">Color: Red</p>
                                <br />
                                <div class="flex items-center justify-between">
                                  <span class="text-base font-bold text-gray-900">
                                    $599
                                  </span>
                                  <span class="text-base font-bold text-gray-900">
                                    x9
                                  </span>
                                </div>
                              </div>
                              <div class="order-product-img">
                                <img
                                  alt=""
                                  src={require("../Components/images/house.jpg")}
                                />
                              </div>
                            </div>

                            {/* <!--If customer buy 2 different items of one shop--> */}
                            <hr class="h-px my-8 bg-gray-200 border-0" />

                            <div class="order-columns">
                              <div class="order-info-product px-3">
                                <span class="text-lg font-semibold text-gray-900">
                                  Ofelia
                                </span>
                                <p class="text-base">Color: Red</p>
                                <br />
                                <div class="flex items-center justify-between">
                                  <span class="text-base font-bold text-gray-900">
                                    $599
                                  </span>
                                  <span class="text-base font-bold text-gray-900">
                                    x9
                                  </span>
                                </div>
                              </div>
                              <div class="order-product-img">
                                <img
                                  alt=""
                                  src={require("../Components/images/devices.jpg")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr class="h-px my-5 border-0 bg-gray-700" />
                        <div class="order-total mb-3 text-right font-semibold">
                          Total: $70
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:col-span-1">
              <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mb-2">
                <div class="container mb-3">
                  <div class="text-3xl font-semibold my-3">Order Summary</div>
                  <div class="flex items-center justify-between">
                    <span class="text-lg text-gray-900">Items:</span>
                    <span class="text-lg text-gray-900">5</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-lg text-gray-900">Subtotal:</span>
                    <span class="text-lg text-gray-900">$199</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-lg text-gray-900">Shipping fee:</span>
                    <span class="text-lg text-gray-900">$4</span>
                  </div>

                  <div class="border p-3 rounded-lg my-3">
                    <div class="flex mb-4">
                      <input
                        checked
                        id="standardDelivery"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <div class="ms-2 text-sm">
                        <label
                          for="standardDelivery"
                          class="font-medium text-gray-900"
                        >
                          Standard
                        </label>
                        <p
                          id="helper-radio-text"
                          class="text-xs font-normal text-gray-500"
                        >
                          Monday, Nov.27
                        </p>
                      </div>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="fastDelivery"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <div class="ms-2 text-sm">
                        <label
                          for="fastDelivery"
                          class="font-medium text-gray-900"
                        >
                          Fastest Delivery
                        </label>
                        <p
                          id="helper-radio-text"
                          class="text-xs font-normal text-gray-500"
                        >
                          Today or Tomorrow
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <form class="w-full max-w-md mx-auto">
                      <label
                        for="default-email"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Email sign-up
                      </label>
                      <div class="relative">
                        <input
                          type="email"
                          id="default-email"
                          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Promotion code"
                        />
                        <button
                          type="submit"
                          class="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-4 py-2"
                        >
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>

                  <hr class="h-px my-5 border-0 bg-gray-400" />
                  <div class="flex items-center justify-between">
                    <span class="text-xl font-semibold text-[#E61E2A]">
                      Order total:
                    </span>
                    <span class="text-xl font-semibold text-[#E61E2A]">
                      $190
                    </span>
                  </div>

                  <div class="my-5">
                    <button
                      type="submit"
                      class="flex w-full justify-center rounded-md bg-[#222160] px-3 py-1.5 text-lg font-medium leading-6 text-white shadow-sm hover:bg-[#000053] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000053]"
                    >
                      Place Your Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.1.1/flowbite.min.js"></script> */}
      </section>
    </>
  );
}
