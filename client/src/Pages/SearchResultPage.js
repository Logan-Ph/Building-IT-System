import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import '../css/searchresult.css';
import SRProductCard from '../Components/SRProductCard'
import SRPagination from '../Components/SRPagination'
import SRPriceRange from '../Components/SRPriceRange'
import SRStarRating from '../Components/SRStarRating'
import { useHits } from 'react-instantsearch';
import { useParams } from 'react-router-dom';
import CustomRefinementList from '../Components/CustomRefinementList';
import SortOptions from '../Components/SortOptions';

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'househole appliances', label: 'Househole Appliances', checked: false },
      { value: 'electronics', label: 'Electronics', checked: false },
      { value: 'fashion', label: 'Fashon', checked: true },
      { value: 'beauty & personal care', label: 'Beauty & Care', checked: false },
      { value: 'baby toys', label: 'Baby Toys', checked: false },
    ],
  },
]


export default function Example() {
  const [filters, setFilter] = useState([{
    id: 'category',
    name: 'Category',
    options: [
      { value: 'beauty & personal care', label: 'Beauty & Care', checked: false },
      { value: 'househole appliances', label: 'Househole Appliances', checked: false },
      { value: 'electronics', label: 'Electronics', checked: false },
      { value: 'fashion', label: 'Fashon', checked: true },
      { value: 'baby toys', label: 'Baby Toys', checked: false },
    ],
  },])

  const [valueFilter, setValueFilter] = useState("")
  console.log("valueFilter", valueFilter)
  useEffect(() => {
    const updatedItems = filters.map(item => {
      if (item?.options?.find(item => item?.label === valueFilter)) {
        return {
          ...item, options: [
            { value: 'fashion', label: 'Fashon', checked: true },
            { value: 'househole appliances', label: 'Househole Appliances', checked: false },
            { value: 'beauty & personal care', label: 'Beauty & Care', checked: false },
            { value: 'electronics', label: 'Electronics', checked: false },
            { value: 'baby toys', label: 'Baby Toys', checked: false }]
        }; // Update the 'name' for the item with id 2
      }
      return item; // Return the unchanged item for other items
    });
    setFilter(updatedItems)
    console.log("updatedItems", updatedItems)

  }, [valueFilter])


  const [sortOptions, setSortOptions] = useState([
    { name: 'Most Popular', current: true, value: 'rBuy_relavant_sort' },
    { name: 'Price: Low to High', current: false, value: 'rBuy_price_asc' },
    { name: 'Price: High to Low', current: false, value: 'rBuy_price_desc' },
  ]);
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState((query.split('='))[1]);
  const { hits } = useHits();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setSearchQuery((query.split('='))[1]);
  }, [query]);

  return (
    <div className="bg-white">
      <div>
        {/* <RefinementList attribute='ratings' operator='and' /> */}
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
                  <form className="mt-4 border-t border-gray-200">
                    <SRPriceRange className="pt-6 px-4" />
                    <SRStarRating className="pt-6 px-4" />

                    {filters?.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            {/* <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3> */}
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                <CustomRefinementList />
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
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
                  {/* {filters?.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-md text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              <CustomRefinementList setFilter={setValueFilter}/>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure> */}
                  {/* ))} */}
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