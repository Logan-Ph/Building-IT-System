export default function ThankForOrderPage() {
    return (
      <>
        <section class="mx-auto px-6 my-10 md:max-w-5xl">
          <div class="mb-10">
            <h1 class="text-center text-4xl font-bold pb-5">
              Thanks for ordering
            </h1>
            <p class="text-gray-500 font-light md:text-center">
              Your purchase has been received and will be processed shortly!
            </p>
          </div>
          <div>
            <p class="text-lg font-medium">Order ID</p>
            <p class="text-[#222160] font-medium">6d91928020920230</p>
            <hr class="h-px my-7 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div class="order-content">
              <div class="checkout order-details">
                <div class="order-columns">
                  <div class="order-info-product px-3">
                    <span class="text-lg font-semibold text-gray-900">
                      TV ABC
                    </span>
                    <br />
                    <div class="flex items-center justify-between">
                      <span class="text-base font-bold text-gray-900">$90</span>
                      <span class="text-base font-bold text-gray-900">x1</span>
                    </div>
                  </div>
                  <div class="order-product-img">
                    <img
                      alt=""
                      src={require("../../Components/images/tv.png")}
                    />
                  </div>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0" />
                <div class="order-columns">
                  <div class="order-info-product px-3">
                    <span class="text-lg font-semibold text-gray-900">
                      TV ABC
                    </span>
                    <br />
                    <div class="flex items-center justify-between">
                      <span class="text-base font-bold text-gray-900">$90</span>
                      <span class="text-base font-bold text-gray-900">x1</span>
                    </div>
                  </div>
                  <div class="order-product-img">
                    <img
                      alt=""
                      src={require("../../Components/images/tv.png")}
                    />
                  </div>
                </div>

                <hr class="h-px my-8 bg-gray-200 border-0" />
                <div class="space-y-2 font-medium">
                  <div class="flex justify-between">
                    <p>Items</p>
                    <p>4</p>
                  </div>
                  <div class="flex justify-between">
                    <p>Subtotal</p>
                    <p>$900</p>
                  </div>
                  <div class="flex justify-between">
                    <p>Shipping - Fastest Delivery</p>
                    <p>$20</p>
                  </div>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0" />
                <div class="flex justify-between text-lg font-medium">
                  <p>Total</p>
                  <p>$100</p>
                </div>
              </div>
            </div>
            <div class="mt-20 space-y-7 md:grid md:grid-cols-2 md:space-y-0">
              <div>
                <p class="mb-4 text-lg font-medium">Shipping Address</p>
                <div class="space-y-1 text-gray-500">
                  <p>088123456</p>
                  <p>158 Nguyen Son</p>
                  <p>Phu Tho Hoa Ward, Tan Phu District</p>
                  <p>Ho Chi Minh City</p>
                </div>
              </div>
              <div>
                <p class="mb-4 text-lg font-medium">Payment Information</p>
                <p class="text-gray-500">Cash On Delivery (COD)</p>
              </div>
            </div>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0" />

          {/* Back to homepage */}
          <div class="flex justify-end">
            <a
              href="#"
              class=" inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100"
            >
              <span class="w-full">Continue Shopping</span>
              <svg
                class="w-4 h-4 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </section>
      </>
    );
}