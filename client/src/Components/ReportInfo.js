export default function ReportInfo() {
    return (
      <>
        <div class="container mx-auto">
          <div class="p-4">
            <div>
              <div class="flex py-5">
                <div class="relative inline-block shrink-0">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Jese Leos image"
                  />
                </div>
                <div class="ms-3 text-sm font-normal">
                  <div class="text-sm font-semibold text-gray-900">
                    Bonnie Green
                  </div>
                  <div class="text-sm font-normal">
                    has reported this account:
                  </div>
                  <div class="text-sm font-semibold text-red-600 mt-2">
                    Scam
                  </div>
                  <div class="text-sm font-normal text-gray-900 my-3">
                    I reported this account for posting scamming products. I
                    have evidence below
                  </div>
                  <div class="grid grid-cols-3 gap-3">
                    <div>
                      <img
                        class="object-fill h-full w-full"
                        src="/images/banner1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="object-fill h-full w-full"
                        src="/images/banner1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="object-fill h-full w-full"
                        src="/images/banner1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="object-fill h-full w-full"
                        src="/images/banner1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="text-sm text-gray-600 mt-3">05-12-2023 17:10</div>
                </div>
              </div>
              {/* <!-- second --> */}
              <div class="flex py-5 border-t border-gray-300">
                <div class="relative inline-block shrink-0">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Jese Leos image"
                  />
                </div>
                <div class="ms-3 text-sm font-normal">
                  <div class="text-sm font-semibold text-gray-900">
                    Bonnie Green
                  </div>
                  <div class="text-sm font-normal">
                    has reported this account:
                  </div>
                  <div class="text-sm font-semibold text-red-600 mt-2">
                    Prohited Item
                  </div>
                  <div class="text-sm font-normal text-gray-900 my-3">
                    I reported this account for posting scamming products. I
                    have evidence below
                  </div>
                  <div class="grid grid-cols-3 gap-3">
                    <div>
                      <img
                        class="object-fill h-full w-full"
                        src="/images/banner1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="text-sm text-gray-600 mt-3">05-12-2023 17:10</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end my-5">
            <button
              type="button"
              data-modal-target="warning-modal"
              data-modal-toggle="warning-modal"
              class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Warning
            </button>
            {/* <!-- Modal for warning--> */}
            <div
              id="warning-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow">
                  {/* <!-- Modal header --> */}
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 class="text-xl font-semibold text-gray-900 flex justify-center">
                      Warning User
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                      data-modal-hide="warning-modal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div class="p-4 md:p-5 space-y-4">
                    <form class="max-w-sm mx-auto">
                      <div class="mb-5">
                        <label
                          for="warning-message"
                          class="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Warning Message
                        </label>
                        <textarea
                          id="warning-message"
                          rows="4"
                          class="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border-gray-300 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Write warning message to user..."
                          required
                        ></textarea>
                      </div>
                    </form>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-end">
                    <button
                      data-modal-hide="warning-modal"
                      type="button"
                      class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Send Warning
                    </button>
                    <button
                      data-modal-hide="warning-modal"
                      type="button"
                      class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              data-modal-target="block-modal"
              data-modal-toggle="block-modal"
              class="focus:outline-none text-white bg-[#E61E2A] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Block
            </button>
            {/* <!-- Modal for block--> */}
            <div
              id="block-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow">
                  {/* <!-- Modal header --> */}
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 class="text-xl font-semibold text-gray-900 flex justify-center">
                      Block User
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                      data-modal-hide="block-modal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div class="p-4 md:p-5 space-y-4">
                    <form class="max-w-sm mx-auto">
                      <div class="mb-5">
                        <label
                          for="block-message"
                          class="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Block Message
                        </label>
                        <textarea
                          id="block-message"
                          rows="4"
                          class="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border-gray-300 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Write block message to user..."
                          required
                        ></textarea>
                      </div>
                      <div class="mb-5">
                        <label
                          for="block-start-date"
                          class="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Start Date
                        </label>
                        <input
                          type="datetime-local"
                          id="block-start-date"
                          name="block-start-date"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          required
                        />
                      </div>
                      <div class="mb-5">
                        <label
                          for="block-start-date"
                          class="block mb-2 text-sm font-medium text-gray-900"
                        >
                          End Date
                        </label>
                        <input
                          type="datetime-local"
                          id="block-start-date"
                          name="block-start-date"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          required
                        />
                      </div>
                    </form>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div class="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b">
                    <button
                      data-modal-hide="block-modal"
                      type="button"
                      class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Block
                    </button>
                    <button
                      data-modal-hide="block-modal"
                      type="button"
                      class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              data-modal-target="remove-modal"
              data-modal-toggle="remove-modal"
              class="focus:outline-none text-white bg-black hover:bg-black-800 focus:ring-4 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Remove
            </button>
            <div
              id="remove-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow">
                  {/* <!-- Modal header --> */}
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 class="text-xl font-semibold text-gray-900 flex justify-center">
                      Remove User
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                      data-modal-hide="remove-modal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div class="p-4 md:p-5 space-y-4">
                    <div class="container mx-auto py-3 px-5 text-base text-center">
                      <strong class="text-lg">
                        Are you sure you want to remove this user?{" "}
                      </strong>
                      <br></br>This action will permanently delete the user from
                      the system. All associated data and permissions will be
                      lost.
                    </div>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-end">
                    <button
                      data-modal-hide="remove-modal"
                      type="button"
                      class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Remove
                    </button>
                    <button
                      data-modal-hide="remove-modal"
                      type="button"
                      class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    >
                      Cancel
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