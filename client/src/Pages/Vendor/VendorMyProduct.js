import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { UserImageContext } from "../../Context/UserImageContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function VendorMyProduct() {
  const { user, setUser } = useContext(UserContext)
  const { setUserImage } = useContext(UserImageContext)
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true })
      setUser(res.data.user);
      setUserImage(res.data.userImage);
      setIsLoading(false);
    }
    catch (er) {
      setError(er)
    }
  }, [setUser, setUserImage])

  useEffect(() => {
    fetchUser();
  }, [fetchUser])

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <>
      {error && <Navigate to={'/login'} replace />}
      {user && user.role === "User" && <Navigate to={'/'} replace />}
      {user && user.role === "Admin" && <Navigate to={'/admin/manage-user'} replace />}
      <div class=" bg-white h-auto lg:w-5/6 md:w-2/3 w-3/4 mx-auto lg:px-20 md:mr-32 relative py-20 ">
        <div className="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4">
          <div className="mb-4">
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label for="product-name" className="block text-sm">Product Name</label>
                    <input type="text" id="product-name" name="product-name" placeholder="Please input at least 2 characters or words" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <p className="text-xs text-gray-400"></p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <label for="stock-min" className="block text-sm">Stock Min</label>
                      <input type="number" id="stock-min" name="stock-min" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="text-xl pt-5">-</div>
                    <div>
                      <label for="stock-max" className="block text-sm">Stock Max</label>
                      <input type="number" id="stock-max" name="stock-max" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label for="category" className="block text-sm">Category</label>
                    <input type="text" id="category" name="category" placeholder="Category" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <label for="sales-min" className="block text-sm">Sales Min</label>
                      <input type="number" id="sales-min" name="sales-min" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="text-xl pt-5">-</div>
                    <div>
                      <label for="sales-max" className="block text-sm">Sales Max</label>
                      <input type="number" id="sales-max" name="sales-max" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Search</button>
                <button type="reset" className=" border-solid border-2 hover:bg-gray-100 px-3 py-1 rounded-md ">Reset</button>
              </div>
            </form>
          </div>
        </div>


        <div className="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4 mb-4">
          <div className="mb-4 flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">All</button>
              <button className="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Live</button>
              <button className="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Sold Out</button>
              <button className="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Reviewing</button>
              <button className="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Violation</button>
              <button className="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Delisted</button>
            </div>
            <div className="space-x-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"> + Add a new product</button>
              <button className="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Batch tools</button>
            </div>
          </div>
          <table className="w-full text-center table-auto border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Product name</th>
                <th className="border border-gray-300 p-2">SKU</th>
                <th className="border border-gray-300 p-2">Variations</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Stock</th>
                <th className="border border-gray-300 p-2">Sales</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="7" className="border border-gray-300 p-2">No Product Found</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </>
  )
}
