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
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={hit.image_link} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-fit object-center lg:h-full lg:w-full" />
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