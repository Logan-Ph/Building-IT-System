import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
import '../css/searchresult.css'; 

export default function SRStarRating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
  
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
                  onClick={() => setRating(ratingValue)} 
                />

                <FaStar 
                  className='star'
                  color={ratingValue <= ( hover || rating ) ? "#FAC800" : "#e4e5e9"} 
                  key={index} 
                  size={30} 
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </>
    );
  }