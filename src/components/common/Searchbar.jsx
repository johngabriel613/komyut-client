import { Icon } from '@iconify/react';
import { Form, useFetcher, useSearchParams } from 'react-router-dom'
import debounce from 'lodash.debounce'
import { useState, useEffect, useMemo } from 'react';
import axios from '../../config/axios';

const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [suggestions, setSuggestions] = useState()

  let fetcher = useFetcher();
  
  useEffect(() => {
    setSuggestions(fetcher.data)   
  },[fetcher.data])
  
  const changeHandler = useMemo(() => {
    return debounce((event) => {
      if(!event.target.value) return setSuggestions('');
      fetcher.submit(event.target.parentElement);
      
    }, 1000);
  }, [fetcher.submit]);


  

  return (
    <div className='absolute w-full max-w-[350px] top-[70px] left-[50px] z-20'>
      <div className='flex-center '>
        <Form method='POST' onChange={(event) => changeHandler(event)} className='relative w-full flex-center'>
          <input className='w-full pl-[42px] py-[8px] text-slate-800 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white ring-1 ring-slate-900/10 rounded-md shadow-sm' type='text' placeholder='Search for routes' name='search'/>
          <Icon className='absolute left-[16px] text-slate-600' width={18} icon="ri:search-line" />
          <svg class={`absolute right-[16px] animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600 ${fetcher.state === 'submitting' ? 'block' : 'hidden'}` }xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <input type="text" name="intent" value="search" hidden />
          {suggestions && 
            <div className='absolute w-full max-h-[200px] top-[50px] text-slate-600 bg-white ring-1 ring-slate-900/10 transition-all duration-100 overflow-y-auto divide-y rounded-md shadow-sm'>
              {suggestions.map(data => (
                <div className='grid gap-1 py-2 px-4 cursor-pointer hover:bg-gray-200' key={data.route_id} onClick={() => {setSearchParams({route_id: data.route_id}); setSuggestions('')}}>
                  <p>{data.route_long_name}</p>
                  <span className='text-xs truncate'>{data.route_desc}</span>
                </div>
              ))}
            </div>
          }
        </Form>
      </div>
    </div>
  )
}

let controller;

export const action = async({request}) => {
  const formData = await request.formData();
  const query = formData.get('search')

  if(controller) controller.abort()

  controller = new AbortController()

  const signal = controller.signal

  try {
    const response = await axios.get(`/search?q=${query}`, {signal})
    return response.data
  } catch (error) {
    throw error
  }
}

export default Searchbar
