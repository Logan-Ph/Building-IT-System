import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { FunnelIcon } from '@heroicons/react/20/solid'
import '../../css/searchresult.css';
import SRProductCard from '../../Components/SRProductCard'
import SRPagination from '../../Components/SRPagination'
import SRPriceRange from '../../Components/SRPriceRange'
import SRStarRating from '../../Components/SRStarRating'
import SRCheckBoxLabel from '../../Components/SRCheckBoxLabel';

import { useHits, useRefinementList } from 'react-instantsearch';
import { Navigate, useParams } from 'react-router-dom';
import SortOptions from '../../Components/SortOptions';
import { UserContext } from '../../Context/UserContext';

export default function Example() {
  const { hits } = useHits();
  const { user } = useContext(UserContext)
  const [sortOptions, setSortOptions] = useState([
    { label: 'Most Popular', value: 'rBuy_relavant_sort', current: false },
    { label: 'Price: Low to High', value: 'rBuy_price_asc', current: false },
    { label: 'Price: High to Low', value: 'rBuy_price_desc', current: false },
  ]);
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState((query.split('='))[1]);
 
  return (
    <div className="bg-gray-100">
      {user && user.role === "Vendor" && <Navigate to={'/dashboard'} replace />}
      {user && user.role === "Admin" && <Navigate to={'/admin/manage-user'} replace />}

      <div>
        {/* Mobile filter dialog */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 xs:text-lg">Search result for <span className='text-[#E61E2A] font-light xs:text-md'>"{searchQuery}"</span></h1>

            <div className="flex items-center">
              <SortOptions sortOptions={sortOptions} setSortOptions={setSortOptions} />
              <FilterSideBar />
            </div>
          </div>

          {/* Normal Screen */}
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="xl:justify-start xl:divide-x-2 xl:gap-6 xl:flex lg:flex lg:justify-start lg:divide-x-2 lg:gap-6 md:flex sm:block ">
              <div className='w-full'>
                {/* Filters */}
                <div className="xs:hidden sm:hidden md:block lg:block wi">

                  <SRPriceRange />
                  <SRStarRating />
                  <SRCheckBoxLabel/>

                  <div className='flex px-6 border border-gray-50 pb-4 bg-white'>
                    <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm rounded-md px-6 py-1 mt-4 mx-auto w-full">Reset</button> 
                  </div>
                </div>
              </div>

              <div className='grid xs:grid-cols-2 xs:gap-x-2 xs:gap-y-4 sm:grid-cols-4 sm:gap-x-2 sm:gap-y-4 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8'>
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



function FilterSideBar({ setMobileFiltersOpen }) {
  const [open, setOpen] = useState(false);
  const { refine} = useRefinementList({ attribute: 'category', operator: 'or' });
  const [valueFilter, setValueFilter] = useState([]);
  const oldCategoryRef = useRef();

  const handleFilterSidebar = () => {
    setOpen((open) => !open)
  };

  const handleCloseSidebar = () => {
    setOpen(false);
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
      <div className={open ? "relative inset-0 z-50 overflow-hidden" : "relative inset-0 z-50 overflow-hidden hidden"}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-y-0 right-0 pl-5 max-w-full flex">
            <div className="w-screen max-w-2xs">
              <div className="h-full bg-white border-l border-gray-200 py-16">
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
                  <SRCheckBoxLabel />

                  <div className='flex px-6 border border-gray-50 pb-4 bg-white'>
                    <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm rounded-md px-6 py-1 mt-4 mx-auto w-full">Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






