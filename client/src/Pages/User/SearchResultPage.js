import { Fragment, useContext, useEffect, useRef, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react';

import { XMarkIcon } from '@heroicons/react/24/outline'

import { FaTimes } from "react-icons/fa";
import { FunnelIcon } from '@heroicons/react/20/solid'
import '../../css/searchresult.css';
import SRProductCard from '../../Components/SRProductCard'
import SRPagination from '../../Components/SRPagination'
import SRPriceRange from '../../Components/SRPriceRange'
import SRStarRating from '../../Components/SRStarRating'

import { useHits, useRefinementList } from 'react-instantsearch';
import { Navigate, useParams } from 'react-router-dom';
import SortOptions from '../../Components/SortOptions';
import { UserContext } from '../../Context/UserContext';

export default function Example() {
  const { hits } = useHits();
  const { user } = useContext(UserContext)
  const { refine, items } = useRefinementList({ attribute: 'category', operator: 'or' });
  const [valueFilter, setValueFilter] = useState([]);
  const [sortOptions, setSortOptions] = useState([
    { label: 'Most Popular', value: 'rBuy_relavant_sort', current: false },
    { label: 'Price: Low to High', value: 'rBuy_price_asc', current: false },
    { label: 'Price: High to Low', value: 'rBuy_price_desc', current: false },
  ]);
  const { query } = useParams();
  const { category } = useParams();
  const oldCategoryRef = useRef();
  const [searchQuery, setSearchQuery] = useState((query.split('='))[1]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setSearchQuery((query.split('='))[1]);
    if (items.length > 0) {
      setValueFilter(items.map(item => ({
        value: item.label,
        label: item.label,
        isRefined: item.isRefined,
      })));
    }
  }, [query, items]);

  useEffect(() => {
    if ((category.split('='))[1]) {
      if (oldCategoryRef.current) {
        // Refine with old state
        refine((oldCategoryRef.current.split('='))[1]);
      }

      // reset the refine 
      valueFilter.filter(option => option.isRefined && (!oldCategoryRef.current || option.value !== (oldCategoryRef.current.split('='))[1])).forEach(option => refine(option.value));

      // Refine with new state
      refine((category.split('='))[1]);
      // Update the old state
      oldCategoryRef.current = category;
    }
  }, [category, refine]);

  if (user === undefined) {
    return <div>Loading....</div>
  }

  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const handleToggleSidebar = () => {
  //   setMobileFiltersOpen(!mobileFiltersOpen);
  // };


  return (
    <div className="bg-gray-100">
      {user && user.role === "Vendor" && <Navigate to={'/dashboard'} replace />}
      {user && user.role === "Admin" && <Navigate to={'/admin/manage-user'} replace />}

      <div>
        {/* Mobile filter dialog */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Search result for <span className='text-[#E61E2A] font-light'>"{searchQuery}"</span></h1>

            <div className="flex items-center">
              <SortOptions sortOptions={sortOptions} setSortOptions={setSortOptions} />

              {/* <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                <span className="sr-only">Filters</span> */}
                {/* Filter button */}
                {/* <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button> */}

              <FilterSideBar />


              {/* <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={handleToggleSidebar}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button> */}
            </div>
          </div>

          {/* <YourComponent
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            setValueFilter={setValueFilter}
            valueFilter={valueFilter}
            refine={refine}
            oldCategoryRef={oldCategoryRef}
            hits={hits}
          /> */}

          {/* Normal Screen */}
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="xl:justify-start xl:divide-x-2 xl:gap-6 xl:flex lg:flex lg:justify-start lg:divide-x-2 lg:gap-6 md:flex sm:block ">
              <div className='w-full'>
                {/* Filters */}
                <div className="xs:hidden sm:hidden md:block lg:block wi">
                  <SRPriceRange />
                  <SRStarRating />
                  <CheckboxLabel setValueFilter={setValueFilter} valueFilter={valueFilter} refine={refine} oldCategoryRef={oldCategoryRef} />
                  <div className='flex px-6 border border-gray-50 pb-4 bg-white'>
                    <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm rounded-md px-6 py-1 mt-4 mx-auto w-full">Reset</button> 
                  </div>
                </div>
              </div>

              <div className='grid xs:grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8'>
                {/* Product grid */}
                {hits.map(hit => (
                  <SRProductCard hit={hit} />
                ))}
              </div>
            </div>
            <SRPagination />
          </section>

        </main>
      </div>

    </div>
  )
}

function CheckboxLabel({ setValueFilter, valueFilter, refine, oldCategoryRef }) {
  const handleItemClick = (value) => {
    if (oldCategoryRef.current && value === (oldCategoryRef.current.split('='))[1]) { oldCategoryRef.current = null; }
    refine(value)
    setValueFilter(valueFilter.map(option => option.value === value ? { ...option, isRefined: !option.isRefined } : option));
  }

  return (
    <div className='flex px-6 border border-gray-50 py-6 bg-white'>
      <div className='w-full'>
        <h3 className='font-medium mb-2'>Categories</h3>
        {valueFilter.map(option => (
          <div className='mb-2 flex items-center'>
            <input type="checkbox" className='rounded-md' onClick={() => handleItemClick(option.value)} checked={option.isRefined} />
            <span className='ml-2 text-sm'>{option.label}</span>
          </div>
        ))}
      </div>
    </div>

  );
}

// function YourComponent({ mobileFiltersOpen, setMobileFiltersOpen, setValueFilter, valueFilter, refine, oldCategoryRef, hits }) {
//   return (
//     <Transition show={mobileFiltersOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-40 " onClose={setMobileFiltersOpen}>
//         {/* <Transition.Child
//           as={Fragment}
//           enter="transition-opacity ease-linear duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="transition-opacity ease-linear duration-300"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black bg-opacity-25" />
//         </Transition.Child> */}

//         <div className="fixed inset-0 z-40 flex">
//           <Transition.Child
//             as={Fragment}
//             enter="transition ease-in-out duration-300 transform"
//             enterFrom="translate-x-full"
//             enterTo="translate-x-0"
//             leave="transition ease-in-out duration-300 transform"
//             leaveFrom="translate-x-0"
//             leaveTo="translate-x-full"
//           >
//             <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//               <div className="flex items-center justify-between px-4">
//                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                 <button
//                   type="button"
//                   className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setMobileFiltersOpen(false);
//                   }}
//                 >
//                   <span className="sr-only">Close menu</span>
//                   <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//               </div>

//               {/* Filters */}
//               <span className="mt-4 border-t border-gray-200">
//                 <SRPriceRange className="pt-6 px-4" />
//                 <SRStarRating className="pt-6 px-4" />
//                 <CheckboxLabel setValueFilter={setValueFilter} valueFilter={valueFilter} refine={refine} oldCategoryRef={oldCategoryRef} />
//               </span>
//             </Dialog.Panel>
//           </Transition.Child>


//         </div>
//       </Dialog>
//     </Transition>
//   );
// }

function FilterSideBar({ setMobileFiltersOpen }) {
  const open = useRef(true);

  const handleFilterSidebar = () => {
    console.log(!open.current)
    open.current = !open.current;
  };

  const handleCloseSidebar = () => {
    open.current = false;
  };

  return (
    <div className="flex">
      <button
        type="button"
        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden md:inline-flex items-center justify-center"
        onClick={handleFilterSidebar}
      >
         {open.current ? (
        <span className="sr-only">Close</span>
        ) : (
        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
  )}
      </button>

      {/* mobile menu */}
      {open.current && (
      <div className="relative inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="w-screen max-w-md">
              <div className="h-full bg-white border-l border-gray-200">
                {/* Sidebar content */}
                <button
                  type="button"
                  className="absolute top-0 right-0 p-4 text-gray-400 hover:text-gray-500"
                  onClick={handleCloseSidebar}
                >
                  <FaTimes className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Close</span>
                </button>
                {/* Rest of your sidebar content goes here */}
                
                <div>
                  <SRPriceRange />
                  <SRStarRating />
                  {/* <CheckboxLabel setValueFilter={setValueFilter} valueFilter={valueFilter} refine={refine} oldCategoryRef={oldCategoryRef} /> */}
                  <div className='flex px-6 border border-gray-50 pb-4 bg-white'>
                    <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm rounded-md px-6 py-1 mt-4 mx-auto w-full">Reset</button> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}





