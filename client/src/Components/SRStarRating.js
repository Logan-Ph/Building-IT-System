import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
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
    if (ratingValue >= 3.5) {
      refine([ratingValue, MAX]);
    } else {
      refine([MIN, MAX]);
    }
  }

  useEffect(() => {
    refine([MIN, MAX]);
  }, [refine]);

  return (
    <>
      <h3 className='font-medium mb-2 mt-3 xs:px-4 sm:px-4'>Rating</h3>
      <div className="flex flex-row justify-around border-b border-gray-200 pb-6 mt-3 xs:px-4 sm:px-4">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                className="rating"
                onClick={() => handleRating(ratingValue)}
              />
              <FaStar
                className='star'
                color={ratingValue <= (hover || rating) ? "#FAC800" : "#e4e5e9"}
                key={index}
                size={30}
                onMouseEnter={() => setHover(ratingValue)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
}