export default function VendorEditProfile() {
    return (
        <div className="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4 max-w-4xl">
            <h2 className="text-2xl font-semibold">Shop Profile</h2>
            <div className="border-b border-gray-900/10 pb-12">

                <div className="mt-5">
                  <label for="photo" className="block text-sm font-medium leading-6 text-gray-900">Avatar picture</label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <input type="file" id="fileUpload" name="photo" accept="image/*" style="display: none;" />
                    <img src="https://as1.ftcdn.net/v2/jpg/01/63/11/70/1000_F_163117064_syJkTuCddASYjvl4WqyRmnuy8cDXpoQY.jpg" onclick="document.getElementById('fileUpload').click()" className="w-14 h-14 rounded-full cursor-pointer" alt="/" />
                    <button type="button" onclick="document.getElementById('fileUpload').click()" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Change
                    </button>
                  </div>
                </div>
            
          
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                
                  <div className="sm:col-span-3">
                    <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">Shop name</label>
                    <div className="mt-2">
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </input>
                    </div>
                  </div>
          
                  <div className="sm:col-span-4">
                    <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                      <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </input>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
                    <div className="mt-2">
                      <input id="phone" name="phone" type="phone" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </input>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label for="about" className="block text-sm font-medium leading-6 text-gray-900">Shop description</label>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Introduce your store, products related to the store,...</p>
        
                    <div className="mt-2 relative">
                        <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" oninput="this.parentNode.querySelector('.counter').innerText = 500 - this.value.length"></textarea>
                        <div className="counter text-xs text-gray-500 text-right pr-2 pt-1 absolute right-0 bottom-0">500</div>
                    </div>
                  </div>
          
                </div>
            </div>
      </div>
)
}