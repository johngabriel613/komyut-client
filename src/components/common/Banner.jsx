import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='w-full bg-red-50 py-[100px] bg-home rounded-lg'>
      <div className='grid gap-4 place-items-center'>
        <div className='max-w-[700px] grid gap-1 mx-auto'>
          <h1 className='text-center text-4xl font-bold text-white '>Your Guide to Effortless <span className='text-blue-500'>Metro Manila</span> Commuting</h1>
          <p className='text-center text-slate-300'>Streamline your daily commute with our user-friendly web app, offering a curated collection of transportation routes. </p>
        </div>
        <Link to={'/routes'} className='flex-center gap-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md'>
          <Icon icon="mingcute:route-fill" width={22}/>
          Browse Routes
        </Link>
      </div>
    </div>
  )
}

export default Banner
