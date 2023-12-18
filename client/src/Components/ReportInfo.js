'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';


export default function ReportInfo() {
  const [openModalBlock, setOpenModalBlock] = useState(false);
  const [openModalRemove, setOpenModalRemove] = useState(false);


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
          {/* Buttons */}
          <div class="flex justify-end my-5">
            {/* Warning Button */}
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:hover:bg-yellow-500 mr-4"
              onClick={() => setOpenModalBlock(true)}
            >
              Block
            </Button>
            <Modal className='justify-center items-center'
              show={openModalBlock}
              onClose={() => setOpenModalBlock(false)}
            >
              <Modal.Header>Block User</Modal.Header>
              <Modal.Body>
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
              </Modal.Body>
              <Modal.Footer className="flex justify-end">
                <Button
                  className=" bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
                  onClick={() => setOpenModalBlock(false)}
                >
                  Block
                </Button>
                <Button color="gray" onClick={() => setOpenModalBlock(false)}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Remove Button */}
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:hover:bg-yellow-500"
              onClick={() => setOpenModalRemove(true)}
            >
              Remove
            </Button>
            <Modal
              show={openModalRemove}
              onClose={() => setOpenModalRemove(false)}
            >
              <Modal.Header>Remove User</Modal.Header>
              <Modal.Body>
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
              </Modal.Body>
              <Modal.Footer className="flex justify-end">
                <Button
                  className=" bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
                  onClick={() => setOpenModalRemove(false)}
                >
                  Remove
                </Button>
                <Button color="gray" onClick={() => setOpenModalRemove(false)}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

         
        </div>
      </>
    );
}