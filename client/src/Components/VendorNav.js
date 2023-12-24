import axios from "axios";
import { useSearchBox } from "react-instantsearch";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function VandorNav({ vendor, activeTab, vendorImage, coverPhoto }) {
  const [openModal, setOpenModal] = useState(false);
  const { refine } = useSearchBox();

  const getTabClass = (tabName) => {
    return `border-b-2 px-2 py-3 duration-700 transition ${activeTab === tabName ? 'border-black' : 'border-transparent hover:border-black'
      }`;
  };

  const createThread = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/chat", { vendorId: vendor._id }, { withCredentials: true });
      localStorage.setItem("threadId", res.data.thread._id);
      window.location.href = "/chat";
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {/* Profile Section */}
      <div class="md:container mx-auto">
        <img
          class="h-auto max-w-full"
          src={`data:image/jpeg;base64,${coverPhoto}`}
          alt=""
        />
        <div class="md:flex my-3 md:justify-between px-4 md:px-0">
          <div class="flex items-center gap-4">
            <img
              src={
                vendorImage
                  ? `data:image/jpeg;base64,${vendorImage}`
                  : require("../Components/images/defaultUserImage.png")
              }
              className="md:w-rounded-full w-[100px] h-[100px]"
              alt=""
            />

            <div class="font-medium">
              <div class="text-2xl">{vendor && vendor.businessName}</div>
              <div class="text-base text-gray-500 mb-2">
                <span class="border-r border-black pr-3">1,8 followers</span>
                <span class="pl-2">69 products</span>
              </div>
              <div>
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2"
                >
                  <i class="fa-regular fa-plus"></i> Follow
                </button>
                <button
                  onClick={(e) => createThread(e)}
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2"
                >
                  <i class="fa-regular fa-comment-dots"></i> Chat
                </button>
              </div>
              <div class="flex">
                <button
                  className="font-medium text-sm text-[#E61E2A] hover:underline cursor-pointer"
                  onClick={() => setOpenModal(true)}
                >
                  {" "} Report{" "}
                </button>
                <Modal
                  show={openModal}
                  onClose={() => setOpenModal(false)}
                  className="!my-auto"
                >
                  <Modal.Header className="flex justify-center">
                    <div className="text-center">Report this user</div>
                  </Modal.Header>
                  <Modal.Body className="overflow-y-auto">
                    <label for="reason" className="font-bold">
                      Select a reason:
                    </label>
                    <select
                      name="reportedReason"
                      id="reportedReason"
                      className="w-full my-2"
                    >
                      <option disabled value="">
                        Select a reason below
                      </option>
                      <option value="fake">Prohibited item</option>
                      <option value="unidentifiedProductOrigin">Scam</option>
                      <option value="indistinctProductIllustratior">
                        Counterfeit
                      </option>
                      <option value="unmatchedProductName">
                        Offensive chat messages / images / videos
                      </option>
                      <option value="unmatchedProductName">
                        Data privacy violation
                      </option>
                      <option value="unmatchedProductName">
                        Posting pornographic, obscene and vulgar content
                      </option>
                      <option value="Other">Other</option>
                    </select>

                    <div className="my-2">
                      <textarea
                        id="w3review"
                        name="w3review"
                        rows="4"
                        cols="50"
                        placeholder="Report Description (10-50 character allowed)"
                        className="w-full"
                      ></textarea>
                    </div>
                  </Modal.Body>

                  <Modal.Footer>
                    <button
                      type="button"
                      class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Send Report
                    </button>
                    <button
                      type="button"
                      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                    >
                      Cancel
                    </button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Nav */}
      <div class="md:container mx-auto my-2 sticky top-0 border-b bg-white">
        <div class="px-4 py-2 mx-auto md:flex md:justify-between">
          <div class="md:order-last drop-shadow-md mt-2">
            <form>
              <div class="relative">
                {activeTab === "PRODUCTS" && (
                  <>
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full py-4 px-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`Search in ${vendor && vendor.businessName}`}
                      onChange={(e) => refine(e.target.value)}
                    />
                  </>
                )}
              </div>
            </form>
          </div>

          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm py-3">
              <li className={getTabClass("HOME")}>
                <a
                  href={vendor ? `/vendor/${vendor._id}/home` : ""}
                  class="text-gray-900hover:underline text-sm font-light md:text-lg"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li className={getTabClass("PRODUCTS")}>
                <a
                  href={vendor ? `/vendor/${vendor._id}/product` : ""}
                  class="text-gray-900hover:underline text-sm md:text-lg font-light"
                >
                  PRODUCTS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
