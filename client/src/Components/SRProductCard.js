export default function SRProductCard()
{
    return <>
    <div className="bg-white shadow-md p-4">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <hr className='border border-gray-200 mt-4'></hr>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <h3 className="text-md text-gray-900 line-clamp-1">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-md font-bold text-[#E61E2A]">$35</p>
            <p className="mt-1 text-sm font-light text-gray-700">Fashion</p>
          </div>
          <p className="text-xs font-light text-gray-500">Rating: 4.9</p>
        </div>
      </div>
    </div>

  </>
}