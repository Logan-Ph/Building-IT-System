import Slider from 'react-slider'
import { useEffect, useState } from 'react'
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
    <div className='flex px-6'>
      <div className='w-full'>
        <h3 className='font-medium mb-2 mt-3'>Price <span className='font-medium'>Range</span></h3>
        <div className={"values"}>${values[0]}- ${values[1]}</div>
        <small className='font-light mt-2 block text-gray-500'>
          Current Range: ${values[1] - values[0]}
        </small>

        <Slider className={"slider"}
          onChange={handleSliderChange}
          onAfterChange={handleAfterChange}
          value={values}
          min={MIN}
          max={MAX} />
          
          
        <form class="max-w-sm mx-auto">
            <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a number:</label>
            <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="90210" required/>
        </form>

      </div>
    </div>



  );
}