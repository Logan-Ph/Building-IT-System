import { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react'
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
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';
import { UserImageContext } from '../../Context/UserImageContext';


export default function Example() {
  const { hits } = useHits();
  const { user, setUser } = useContext(UserContext)
  const { setCart } = useContext(CartContext)
  const { setUserImage } = useContext(UserImageContext)
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

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
      setUser(res.data.user);
      setCart(res.data.length)
      setUserImage(res.data.userImage)
    } catch (er) {
    }
  }, [setUser, setCart, setUserImage])

  useEffect(() => {
    fetchUser();
    setSearchQuery((query.split('='))[1]);
    if (items.length > 0) {
      setValueFilter(items.map(item => ({
        value: item.label,
        label: item.label,
        isRefined: item.isRefined,
      })));
    }
  }, [query, items, fetchUser]);

  useEffect(() => {
    if ((category.split('='))[1]){
      if (oldCategoryRef.current) {
        // Refine with old state
        refine((oldCategoryRef.current.split('='))[1]);
      }
  
      // find the refined filter that user apply
      const refinedFilter = valueFilter.filter(option => option.isRefined && option.value !== (oldCategoryRef.current.split('='))[1]);
  
      // reset the refined filter
      refinedFilter.forEach(option => {
        refine(option.value)
      })
  
      // Refine with new state
      refine((category.split('='))[1]);
      // Update the old state
      oldCategoryRef.current = category;
    }
  }, [category, refine]);

  return (
    <div className="bg-white">
      {user && user.role === "Vendor" && <Navigate to={'/dashboard'} replace />}
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 " onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <span className="mt-4 border-t border-gray-200">
                    <SRPriceRange className="pt-6 px-4" />
                    <SRStarRating className="pt-6 px-4" />
                    <CheckboxLabel setValueFilter={setValueFilter} valueFilter={valueFilter} refine={refine} />
                  </span>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

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
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="flex">
              <div className='w-[35%] md:pr-16 lg:pr-20'>
                {/* Filters */}
                <div className="xs:hidden sm:hidden lg:block wi">
                  <SRPriceRange />
                  <SRStarRating />
                  <CheckboxLabel setValueFilter={setValueFilter} valueFilter={valueFilter} refine={refine} />
                </div>
              </div>

              <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8'>
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

function CheckboxLabel({ setValueFilter, valueFilter, refine }) {
  const handleItemClick = (value) => {
    refine(value)
    setValueFilter(valueFilter.map(option => option.value === value ? { ...option, isRefined: !option.isRefined } : option));
  }

  return (
    <div className='flex mb-3 pb-6 xs:px-4 sm:px-4'>
      <div className='w-full'>
        <h3 className='font-medium mb-2 mt-3'>Categories</h3>
        {valueFilter.map(option => (
          <div className='mb-2 flex items-center'>
            <input type="checkbox" className='rounded-md' onClick={() => handleItemClick(option.value)} checked={option.isRefined} />
            <span className='ml-2 text-md'>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}