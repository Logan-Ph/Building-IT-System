
export default function VendorMyProduct() {
  return (
    <>
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


      <div class="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4 mb-4">
        <div class="mb-4 flex justify-between items-center">
          <div class="flex space-x-2">
            <button class="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">All</button>
            <button class="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Live</button>
            <button class="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Sold Out</button>
            <button class="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Reviewing</button>
            <button class="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Violation</button>
            <button class="bg-gray-200 hover:bg-blue-700 hover:text-white px-3 py-1 rounded">Delisted</button>
          </div>
          <div class="space-x-2">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"> + Add a new product</button>
          </div>
        </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Stock
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Sales
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        $20000
                    </td>
                    <td class="px-6 py-4">
                        50
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">
                        $1000
                    </td>
                    <td class="px-6 py-4">
                        200
                    </td>
                    <td class="px-6 py-4">
                        $1999
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        $100
                    </td>
                    <td class="px-6 py-4">
                        200
                    </td>
                    <td class="px-6 py-4">
                        $1000
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>

      </div>

    </>
  )
}
