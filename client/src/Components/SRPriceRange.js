import Slider from 'react-slider'
import {useState} from 'react'
const MIN = 0;
const MAX = 12000;

export default function SRPriceRange() {
    const [values, setValues] = useState([MIN, MAX])
    return (
      <div className='flex mb-3 border-b border-gray-200 pb-6 xs:px-4 sm:px-4'>
        <div className='w-full'>
          <h3 className='font-medium mb-2 mt-3'>Price <span className='font-medium'>Range</span></h3>
          <div className={"values"}>${values[0]}- ${values[1]}</div>
          <small className='font-light mt-2 block text-gray-500'>
            Current Range: ${values[1] - values[0]}
          </small>
  
          <Slider className={"slider"} 
                  onChange={setValues} 
                  value ={values} 
                  min={MIN} 
                  max={MAX}/>
        </div>
      </div>
  
  
      
    );
  }