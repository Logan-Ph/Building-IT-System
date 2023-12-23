import aa from 'search-insights';

export default function SRProductCard({ hit, user }) {
  const accessToken = "70699cb6d8187950476a63e8e3ff8e02cac09bf497a40d4f91939e0c32be74cb970355fddd194acf319923528ea1dfb4c0f6a1bbb46d8c78af50c94b473f24e3"
  const handleClickedObjectIDsAfterSearch = (hit) => {
    aa('clickedObjectIDsAfterSearch', {
      userToken: user ? user._id : null,
      authenticatedUserToken: accessToken,
      eventName: 'Product Clicked',
      index: 'rBuy',
      queryID: hit.__queryID,
      objectIDs: [hit.objectID],
      positions: [hit.__position],
    });
  }

  return <>
    <div className="bg-white shadow-md p-4">
      <a className="group relative" href={`/product/${hit.objectID}`} onClick={() => {handleClickedObjectIDsAfterSearch(hit)}}>

        <div className="w-full h-[220px] md:h-[200px] sm:h-[180px] xs:h-[160px] sm:w-3/4 sm:mx-auto xs:w-3/4 xs:mx-auto">
          <img src={hit.image_link} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-fit object-center scale-75 sm:scale-75 xs:scale-75" />
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