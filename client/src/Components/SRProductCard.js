export default function SRProductCard({ hit }) { 
  return <>
    <div className="bg-white shadow-md p-4">

      <a className="group relative" href={`/product/${hit.objectID}`}>

        <div className="w-full h-[220px] md:h-[200px] sm:h-[180px] xs:h-[160px] sm:w-3/4 sm:mx-auto xs:w-3/4 xs:mx-auto">
          <img src={hit.image_link} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-fit object-center scale-90 sm:scale-75 xs:scale-75" />
        </div>
        <hr className='border border-gray-200 mt-4'></hr>
        <div className="mt-4 flex items-center">
          <div>
            <h3 className="text-md text-gray-900 line-clamp-1">
              {/* <span> */}
                <span aria-hidden="true" className="absolute inset-0"></span>
                {hit.product_name}
              {/* </span> */}
            </h3>
            <p className="mt-1 text-md font-bold text-[#E61E2A]">${hit.price}</p>
            <p className="mt-1 text-sm font-light text-gray-700">{hit.category}</p>
            <p className="text-xs font-medium text-[#fac800f1] mt-4">Rating: {hit.ratings}</p>
          </div>
          
        </div>
      </a>
    </div>
  </>
}