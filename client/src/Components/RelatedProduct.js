import { Rating } from "flowbite-react";

export default function RelatedProduct({ item }) {
  return (
    <>
      <div className=" px-6 py-6 shadow-lg hover:shadow-inner transition duration-500 bg-white rounded-lg">
        {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-1/2"> */}
        <a href={`/product/${item.objectID}`}>
          <img src={item.image_link} alt="" className="h-auto w-auto xs:h-[100px] xs:w-[100px] sm:h-[160px] sm:w-[160px] lg:h-64 lg:w-full mt-2" />
        </a>
        {/* </div> */}
        <div className="mt-4 flex justify-between xs:flex xs:flex-col sm:flex sm:flex-col">
          <div>
            <h3 className="text-md xs:text-xs font-semibold text-gray-700 line-clamp-1">
              <a href={`/product/${item.objectID}`}>
                {item.product_name}
              </a>
            </h3>
            <Rating>
            <p className="mt-1 text-md text-gray-500 xs:text-xs">Ratings: {item.ratings}</p>
              <Rating.Star className="mt-1 mx-1"/>
            </Rating>
          </div>
          <p className="text-md font-medium text-gray-900">${item.price}.00</p>
        </div>
      </div>
    </>
  )
}