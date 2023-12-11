import axios from 'axios'
import { useContext, useState, useEffect, useCallback } from 'react'
import { UserContext } from "../../Context/UserContext";
import { UserImageContext } from '../../Context/UserImageContext';
import { Navigate } from 'react-router-dom';

export default function VendorPostingProduct() {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState("Household Appliances");
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState('');
  const { user } = useContext(UserContext);
  const [error, setError] = useState('');

  const data = {
    productName: productName,
    category: category,
    price: price,
    description: description,
    file: file,
  }

  const handleFileChange = (event) => {
    event.preventDefault()
    setFile(event.target.files[0]);
  };

  const handleDropdownChange = (event) => {
    setCategory(event.target.value);
  };

  async function axiosPostData() {
    await axios.post('http://localhost:4000/add-new-product', data, { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
        setError('')
      })
      .catch(er => { setError(er.response.data)});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosPostData();
  }

  if (user === undefined) {
    console.log(user)
    return <div>Loading....</div>
  }

  return (
    <div className="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4 max-w-4xl">
      {user && user.role === "User" && <Navigate to={'/'} replace />}
      {user && user.role === "Admin" && <Navigate to={'/admin/manage-user'} replace />}
      {(error || !user) && <Navigate to='/login' replace={true} />}
      <form>
        <h2 class="mb-4 text-2xl tracking-tight font-bold text-gray-900">Posting Products</h2>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">

            {/* Cái element này để upload image */}

            <div class="col-span-full">
              <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Product Images</label>
              <p class="mt-1 text-sm leading-6 text-gray-600">Upload real, high resolution, clear product images. You should choose images with 1:1 resolution</p>
              <section class="container w-full mx-auto items-center py-4">
                <div class="max-w-sm mx-auto items-center">
                  <div class="px-4 py-6">
                    <div id="image-preview" class="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
                      <input id="upload" onChange={handleFileChange} type="file" class="hidden" accept="image/*" />
                      <label for="upload" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
                        <p class="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b class="text-gray-600">2mb</b></p>
                        <p class="font-normal text-sm text-gray-400 md:px-6">and should be in <b class="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                        <span id="filename" class="text-gray-500 bg-gray-200 z-50"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Javascript của element upload image */}


            <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div class="col-span-full">
                <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
                <p class="mt-3 text-sm leading-6 text-gray-600">Product name must use proper accented Vietnamese or English, with no shortened words, and contain at least 10 characters. For all Shop, maximum product name must not exceed 120 characters, including spaces.</p>
                <div class="mt-2">
                  <input onChange={(e) => setProductName(e.target.value)} type="text" on name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
                <p class="mt-3 text-sm leading-6 text-gray-600">Uploading a product to the right category makes it easier for shoppers to find your product while searching in that category.</p>
                <select value={category} onChange={handleDropdownChange} id="dropdown" name="dropdown" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" >
                  <option value="Household Appliances">Household Appliances</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                  <option value="Baby toys">Baby toys</option>
                </select>
                {/* <div class="mt-2">
                  <input onChange={(e) => setCategory(e.target.value)} type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div> */}
              </div>

              <div class="col-span-full">
                <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                <p class="mt-3 text-sm leading-6 text-gray-600">Product's price must be in dollar.</p>
                <div class="mt-2">
                  <input onChange={(e) => setPrice(e.target.value)} type="number" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <p class="mt-3 text-sm leading-6 text-gray-600">Provide detailed product information such as: Recommendations, Instructions for use, Technical specifications, Warning information,...</p>

                <div class="mt-2 relative">
                  <textarea onChange={(e) => setDescription(e.target.value)} id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" oninput="this.parentNode.querySelector('.counter').innerText = 4000 - this.value.length"></textarea>
                  <div class="counter text-xs text-gray-500 text-right pr-2 pt-1 absolute right-0 bottom-0">4000</div>
                </div>
              </div>
            </div>
          </div>


          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="rounded-md px-3 py-2 text-sm font-semibold shadow-sm border-solid border-2  hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Cancel</button>
            <button onClick={handleSubmit} type="submit" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Save and Publish</button>
          </div>
        </div>
      </form>
    </div>
  )
}