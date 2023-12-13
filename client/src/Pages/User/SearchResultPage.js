import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
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

  function YourComponent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };

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

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

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

