import { Icon } from '@iconify/react';
import { Form, useFetcher, useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useState, useEffect, useMemo} from 'react';
import axios from '../../config/axios';
import { useMap } from '../../hooks/useMap';

const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [suggestions, setSuggestions] = useState();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const {geojson, setGeojson, searchValue, setSearchValue} = useMap();

  let fetcher = useFetcher();
  
  useEffect(() => {
    setSuggestions(fetcher.data)   
  },[fetcher.data])

  useEffect(() => {
    const routeID = searchParams.get('route_id');

    if(routeID){
      setIsSearchActive(true)
    }
  },[])
  
  const changeHandler = useMemo(() => {
    return debounce((event) => {
      if(!event.target.value) return setSuggestions('');
      fetcher.submit(event.target.parentElement);
      
    }, 1000);
  }, [fetcher.submit]);

  const resetHandler = () => {
    setSearchParams({ route_id: '' });
    setSearchValue('');
    setIsSearchActive(false);
  }

  return (
    <div className='w-full'>
      <div className='flex-center'>
        <Form method='POST' onChange={(event) => changeHandler(event)} className='relative w-full flex-center'>
          {searchValue ? 
            <div className='relative flex-center pl-[8px] pr-[20px] py-[8px] bg-slate-700 w-full rounded'>
              <p className='text-white line-clamp-1'>{searchValue}</p>
              <button onClick={resetHandler} className='absolute right-2'>
                <Icon icon={'tabler:x'} className='text-slate-200'/>
              </button>
            </div>
            :
            <>
              <input className='w-full pl-[32px] py-[8px] text-white hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#10151D] rounded' type='text' placeholder='Search for routes' name='search'/>
              <Icon className='absolute left-[8px] text-[#8a8d92]' width={18} icon="ri:search-line" />
              <svg className={`absolute right-[8px] animate-spin h-5 w-5 text-blue-400 ${fetcher.state === 'submitting' ? 'block' : 'hidden'}` } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </>
          } 
          <input type="text" name="intent" value="search" readOnly hidden />
          {suggestions && 
            <div className='absolute w-full max-h-[200px] top-[50px] text-white bg-[#10151D] border border-[#2E3C51] transition-all duration-100 overflow-y-auto divide-y divide-[#434a58] rounded z-30 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-800'>
              {suggestions.map(data => (
                <div className='grid gap-1 py-2 px-4 cursor-pointer hover:bg-[#2a2f36]' key={data.route_id} onClick={() => {setSearchParams({route_id: data.route_id});  setSuggestions('');}}>
                  <div className='flex gap-1 '>
                    <p>{data.route_long_name}</p>
                    {data.route_short_name && 
                    <span className='text-xs bg-amber-500 py-1 px-2'>{data.route_short_name}</span>
                    }
                  </div>
                  <span className='text-xs truncate text-[#808080]'>{data.route_desc}</span>
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
