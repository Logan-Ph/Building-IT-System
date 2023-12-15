import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import '../css/searchresult.css';

import { useRange } from "react-instantsearch";
const MIN = 0;
const MAX = 5;

export default function SRStarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { refine } = useRange({ attribute: 'ratings' });

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
    refine([ratingValue, MAX]);
  }

  useEffect(() => {
    refine([MIN, MAX]);
  }, [refine]);


  return (
    <>
      <div className="px-6 border border-gray-50 py-6 bg-white">
      <h3 className='font-medium mb-2'>Rating</h3>
      <div className="flex flex-row">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label className="flex flex-col justify-center items-center">
              {/* <input 
                type="radio" 
                name="rating" 
                size={10}
                value={ratingValue} 
                onClick={() => handleRating(ratingValue)} 
              /> */}

              <div className="starRating gap-2">
                {ratingValue <= (hover || rating) ? (
                  index + 0.5 <= (hover || rating) ? (

                    //Full Star
                    <FaStar 
                      className="star xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-6 md:h-6 sm:w-10 sm:h-10 xs:w-10 xs:h-10  "
                      color="#FAC800"
                      value={ratingValue} 
                      onClick={() => handleRating(ratingValue)} 
                      onMouseEnter={() => setHover(ratingValue)} 
                      
                    />
                  ) : (

                    //Half Star
                    <FaStarHalfAlt
                      className="star xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-6 md:h-6 sm:w-10 sm:h-10 xs:w-10 xs:h-10 " 
                      color="#FAC800"
                      value={ratingValue} 
                      onClick={() => handleRating(ratingValue)} 
                      onMouseEnter={() => setHover(ratingValue)}  
                    />
                  )
                ) : (

                  //Empty Star
                  <FaRegStar
                    className="star xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-6 md:h-6 sm:w-10 sm:h-10 xs:w-10 xs:h-10 "
                    color="#FAC800"
                    value={ratingValue} 
                    onClick={() => handleRating(ratingValue)} 
                    onMouseEnter={() => setHover(ratingValue)} 
                  />
                )}
              </div>

            </label>
          );
        })}
      </div>
      </div>

    </>
  );
}