import {  useContext, useEffect, useRef, useState } from 'react'
import '../css/searchresult.css';
import { useRefinementList } from 'react-instantsearch';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';


export default function SRCheckBoxLabel(){
    const handleItemClick = (value) => {
        if (oldCategoryRef.current && value === (oldCategoryRef.current.split('='))[1]) { oldCategoryRef.current = null; }
        refine(value)
        setValueFilter(valueFilter.map(option => option.value === value ? { ...option, isRefined: !option.isRefined } : option));
    };
    const { category } = useParams();
    const { query } = useParams();
    const { refine, items } = useRefinementList({ attribute: 'category', operator: 'or' });
    const [valueFilter, setValueFilter] = useState([]);
    const oldCategoryRef = useRef();
    const [searchQuery, setSearchQuery] = useState((query.split('='))[1]);
    const { user } = useContext(UserContext)
 
    useEffect(() => {
        setSearchQuery((query.split('='))[1]);
        if (items.length > 0) {
        setValueFilter(items.map(item => ({
            value: item.label,
            label: item.label,
            isRefined: item.isRefined,
        })));
        }
    }, [query, items]);

  useEffect(() => {
    if ((category.split('='))[1]) {
      if (oldCategoryRef.current) {
        // Refine with old state
        refine((oldCategoryRef.current.split('='))[1]);
      }

      // reset the refine 
      valueFilter.filter(option => option.isRefined && (!oldCategoryRef.current || option.value !== (oldCategoryRef.current.split('='))[1])).forEach(option => refine(option.value));

      // Refine with new state
      refine((category.split('='))[1]);
      // Update the old state
      oldCategoryRef.current = category;
    }
  }, [category, refine]);

  if (user === undefined) {
    return <div>Loading....</div>
  }

    return (
        <div className='flex px-6 border border-gray-50 py-6 bg-white'>
          <div className='w-full'>
            <h3 className='font-medium mb-2'>Categories</h3>
            {valueFilter.map(option => (
              <div className='mb-2 flex items-center'>
                <input type="checkbox" className='rounded-md' onClick={() => handleItemClick(option.value)} checked={option.isRefined} />
                <span className='ml-2 text-sm'>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
    
      );
    }
