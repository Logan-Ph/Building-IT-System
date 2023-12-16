import Slider from 'react-slider'
import { useEffect, useState } from 'react'
import { GoDash } from "react-icons/go";
import { useRange } from 'react-instantsearch';
const MIN = 0;
const MAX = 12000;

export default function SRPriceRange() {
  const [values, setValues] = useState([MIN, MAX])
  const { refine } = useRange({ attribute: 'price' });

  useEffect(() => {
    refine([MIN, MAX]);
  }, [refine]);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
  };

  const handleAfterChange = (newValues) => {
    refine(newValues);
  };

  return (
    <div className='flex px-6 border border-gray-50 py-6 bg-white'>
      <div className='w-full'>
        <h3 className='font-medium mb-2'>Price <span className='font-medium'>Range</span></h3>
        {/* <div className={"values"}>${values[0]}- ${values[1]}</div> */}
        {/* <small className='font-light mt-2 block text-gray-500'>
          Current Range: ${values[1] - values[0]}
        </small> */}

        {/* <Slider className={"slider"}
          onChange={handleSliderChange}
          onAfterChange={handleAfterChange}
          value={values}
          min={MIN}
          max={MAX} /> */}

        {/* New Price Range Filter */}
        <div className='flex justify-center items-center'>

          <div className='flex items-center'>
            <i className="fa-solid fa-dollar-sign mr-2"></i>
            <input type="number" id="number-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2" placeholder="FROM" required />
          </div>
          <div className='mx-2'>
            <GoDash />
          </div>
          <div className='flex items-center'>
            <i className="fa-solid fa-dollar-sign mr-2"></i>
            <input type="number" id="number-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2" placeholder="TO" required />
          </div>
        </div>
        <div>
          <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm rounded-md px-6 py-1 mt-4 mx-auto w-full">Apply Now</button>
        </div>
      </div>
    </div>
  );
}