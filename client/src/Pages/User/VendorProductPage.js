import VendorNav from "../../Components/VendorNav";
import { useCallback, useContext, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import "../../css/searchresult.css";
import SRProductCard from "../../Components/SRProductCard";
import SRPagination from "../../Components/SRPagination";
import SRPriceRange from "../../Components/SRPriceRange";
import SRStarRating from "../../Components/SRStarRating";
import { useHits, useRefinementList } from "react-instantsearch";
import { Navigate, useParams } from "react-router-dom";
import CustomRefinementList from "../../Components/CustomRefinementList";
import axios from "axios";
import SortOptions from "../../Components/SortOptions";
import { UserContext } from "../../Context/UserContext";

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
];

export default function VendorProductPage() {
  const [sortOptions, setSortOptions] = useState([
    { label: 'Most Popular', value: 'rBuy_relavant_sort', current: false },
    { label: 'Price: Low to High', value: 'rBuy_price_asc', current: false },
    { label: 'Price: High to Low', value: 'rBuy_price_desc', current: false },
  ]);
  const { refine } = useRefinementList({ attribute: 'owner' });
  const params = useParams()
  const { hits } = useHits();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [vendor, setVendor] = useState()
  const [vendorImage, setVendorImage] = useState()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useContext(UserContext)

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/vendor/${params.id}/product`, { withCredentials: true })
      setVendor(res.data.vendor)
      setVendorImage(res.data.vendorImage)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }, [params.id])


  useEffect(() => {
    fetchData();
    vendor && refine(vendor.businessName);
  }, [fetchData, refine, vendor?.businessName])

  if (user === undefined || isLoading) {
    return <div>....is loading</div>
  }

  return (
    <>
      {error && <Navigate to={"/"} replace />}
      {user && user.role === "Vendor" && <Navigate to={'/dashboard'} replace />}
      {user && user.role === "Admin" && <Navigate to={'/admin/manage-user'} replace />}
      <section>
        {/* <!-- Vendor Profile and Nav section --> */}
        <VendorNav vendor={vendor} activeTab={"PRODUCTS"} vendorImage={vendorImage} />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              All Products <span class="text-lg">(90)</span>
            </h1>

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
