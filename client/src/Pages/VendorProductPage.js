import VendorNav from "../Components/VendorNav";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import "../css/searchresult.css";
import SRProductCard from "../Components/SRProductCard";
import SRPagination from "../Components/SRPagination";
import SRPriceRange from "../Components/SRPriceRange";
import SRStarRating from "../Components/SRStarRating";
import { useHits, useSortBy } from "react-instantsearch";
import { useParams } from "react-router-dom";
import CustomRefinementList from "../Components/CustomeRefinementList";

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      {
        value: "househole appliances",
        label: "Househole Appliances",
        checked: false,
      },
      { value: "electronics", label: "Electronics", checked: false },
      { value: "fashion", label: "Fashon", checked: true },
      {
        value: "beauty & personal care",
        label: "Beauty & Care",
        checked: false,
      },
      { value: "baby toys", label: "Baby Toys", checked: false },
    ],
  },
  // {
  //   id: 'location',
  //   name: 'Location',
  //   options: [
  //     { value: 'Ha Noi Capital City', label: 'Ha Noi Capital City', checked: false },
  //     { value: 'Ho Chi Minh City', label: 'Ho Chi Minh City', checked: false },
  //     { value: 'Da Nang City', label: 'Da Nang City', checked: false },
  //   ],
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function VendorProductPage() {
    const [sortOptions, setSortOptions] = useState([
      { name: "Most Popular", current: true, value: "rBuy_relavant_sort" },
      { name: "Price: Low to High", current: false, value: "rBuy_price_asc" },
      { name: "Price: High to Low", current: false, value: "rBuy_price_desc" },
    ]);
    const { query } = useParams();
    const { hits } = useHits();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const { refine } = useSortBy({
      items: [
        {
          label: "Price: Low to High",
          value: "rBuy_price_asc",
          current: false,
        },
        {
          label: "Price: High to Low",
          value: "rBuy_price_desc",
          current: false,
        },
        { label: "Most Popular", value: "rBuy_relavant_sort", current: true },
      ],
    });

    const handleSortOptionClick = (selectedOption) => {
      setSortOptions(
        sortOptions.map((option) =>
          option.name === selectedOption.name
            ? { ...option, current: true }
            : { ...option, current: false }
        )
      );
      refine(selectedOption.value);
    };

  return (
    <>
      <section>
        {/* <!-- Vendor Profile and Nav section --> */}
        <VendorNav />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              All Products <span class="text-lg">(90)</span>
            </h1>

            {/* or Category */}
            {/* <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              Category 1 <span class="text-lg">(90)</span>
            </h1> */}

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <span
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={(e) => {
                                handleSortOptionClick(option);
                              }}
                            >
                              {option.name}
                            </span>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

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
              <div className="w-[35%] md:pr-16 lg:pr-20">
                {/* Filters */}
                <div className="xs:hidden sm:hidden lg:block wi">
                  <SRPriceRange />
                  <SRStarRating />
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-md text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              <CustomRefinementList />
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>

              <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
                {/* Product grid */}
                {hits.map((hit) => (
                  <SRProductCard hit={hit} />
                ))}
              </div>
            </div>
            <SRPagination />
          </section>
        </main>
      </section>
    </>
  );
}
