export default function VendorPostingProduct() {
  {/* <script>
  const uploadInput = document.getElementById('upload');
  const filenameLabel = document.getElementById('filename');
  const imagePreview = document.getElementById('image-preview');
  
  // Check if the event listener has been added before
  let isEventListenerAdded = false;
  
  uploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
  
  if (file) {
    filenameLabel.textContent = file.name;
  
  const reader = new FileReader();
      reader.onload = (e) => {
    imagePreview.innerHTML =
    `<img src="${e.target.result}" class="max-h-48 rounded-lg mx-auto" alt="Image preview" />`;
  imagePreview.classList.remove('border-dashed', 'border-2', 'border-gray-400');
  
  // Add event listener for image preview only once
  if (!isEventListenerAdded) {
    imagePreview.addEventListener('click', () => {
      uploadInput.click();
    });
  
  isEventListenerAdded = true;
        }
      };
  reader.readAsDataURL(file);
    } else {
    filenameLabel.textContent = '';
  imagePreview.innerHTML =
  `<div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">No image preview</div>`;
  imagePreview.classList.add('border-dashed', 'border-2', 'border-gray-400');
  
      // Remove the event listener when there's no image
      imagePreview.removeEventListener('click', () => {
    uploadInput.click();
      });
  
  isEventListenerAdded = false;
    }
  });
  
  uploadInput.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  </script> */}


  return (
    <div className="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4 max-w-4xl">
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
                      <input id="upload" type="file" class="hidden" accept="image/*" />
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
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
                <p class="mt-3 text-sm leading-6 text-gray-600">Uploading a product to the right category makes it easier for shoppers to find your product while searching in that category.</p>
                <div class="mt-2">
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <p class="mt-3 text-sm leading-6 text-gray-600">Provide detailed product information such as: Recommendations, Instructions for use, Technical specifications, Warning information,...</p>

                <div class="mt-2 relative">
                  <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" oninput="this.parentNode.querySelector('.counter').innerText = 4000 - this.value.length"></textarea>
                  <div class="counter text-xs text-gray-500 text-right pr-2 pt-1 absolute right-0 bottom-0">4000</div>
                </div>
              </div>
            </div>
          </div>


          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="rounded-md px-3 py-2 text-sm font-semibold shadow-sm border-solid border-2  hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Cancel</button>
            <button type="submit" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Save and Delist</button>
            <button type="submit" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Save an Publish</button>

          </div>
        </div>
      </form>
    </div>
  )
}