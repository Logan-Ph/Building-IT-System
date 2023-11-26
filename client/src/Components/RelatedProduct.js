
export default function RelatedProduct() {
    return(

    
    <>
    
    <div className=" px-6 py-6 shadow-lg hover:shadow-inner transition duration-500 bg-white rounded-lg">
    {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-1/2"> */}
    <img src="https://m.media-amazon.com/images/I/716mmFt0PGL._AC_UL320_.jpg" alt="" className="h-auto w-auto object-cover object-center lg:h-64 lg:w-full mt-2" />
    {/* </div> */}
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-md font-semibold text-gray-700 line-clamp-1">
          <a href="#">
            Name
          </a>
        </h3>
        <p className="mt-1 text-md text-gray-500">Reviews</p>
      </div>
      <p className="text-md font-medium text-gray-900">$35</p>
    </div>
  </div>
  
    </>
    )
}