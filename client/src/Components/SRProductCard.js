export default function SRProductCard({ hit }) {
  return <>
    <div className="bg-white shadow-md p-4">
      <a className="group relative" href={`/product/${hit.objectID}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={hit.image_link} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <hr className='border border-gray-200 mt-4'></hr>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <h3 className="text-md text-gray-900 line-clamp-1">
              <span>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {hit.product_name}
              </span>
            </h3>
            <p className="mt-1 text-md font-bold text-[#E61E2A]">${hit.price}</p>
            <p className="mt-1 text-sm font-light text-gray-700">{hit.category}</p>
          </div>
          <p className="text-xs font-light text-gray-500">Rating: {hit.ratings}</p>
        </div>
      </a>
    </div>
  </>
}