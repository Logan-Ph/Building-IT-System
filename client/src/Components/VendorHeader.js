import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { UserContext } from '../Context/UserContext'
import { UserImageContext } from '../Context/UserImageContext'

export default function VendorHeader() {
  const { user } = useContext(UserContext)
  const { userImage } = useContext(UserImageContext)
  return <>
    <section>
      <div className="w-full">
        <div className="border py-3 px-6 white border-[#E61E2A]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <!-- logo --> */}
              <a className="flex items-center lg:ml-10 " href='\'>
                <img
                  src={require("./images/logo1.png")}
                  className="w-14 mb-2 lg:w-14 md:w-12 sm:w-10 xs:w-8"
                  alt="logo" />

                <span href='\' className="pl-3.5 font-semibold text-[#E61E2A] lg:text-2xl md:text-2xl sm:text-lg xs:text-md ">rBuy
                </span>
              </a>

              {/* Vendor page */}

              <h1 className="lg:text-2xl xs:text-xs sm:text-md md:text-lg xl:text-3xl text-gray-900 flex items-center font-semibold xl:ml-12 lg:ml-10 xs:ml-1 sm:ml-2 md:ml-2">Seller Centre</h1>

            </div>
            <div className='flex items-center'>
              {/* avatar icon */}
              <DropdownAva />
              <p className='font-light text-gray-500 ml-2 xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-xs'>nnthmai</p>
            </div>

          </div>
        </div>
      </div>
    </section>

  </>
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function DropdownAva() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex -space-x-2 overflow-hidden">
          <div className='w-10 h-10 rounded-full'>
            <img className="inline-block w-full h-full rounded-full object-fit ring-2 ring-white"
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwZ2lybCUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D"
              alt="avatar_img" />
          </div>
          {/* Cái đang comment là nếu ko có ava thì để nó đó, ý là vậy */}
          {/* <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div> */}

        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-[-10px] z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                  <i className="far fa-edit mr-1"></i>
                  Shop Information
                </a>
              )}
            </Menu.Item>

            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    <i className="fas fa-sign-out-alt mr-1"></i>
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}