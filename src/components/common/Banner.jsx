import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='w-full pt-[100px] rounded-lg'>
      <div className='grid gap-8 place-items-center'>
        <div className='max-w-[700px] grid gap-8 mx-auto'>
          <h1 className=' text-center text-4xl font-semibold text-white md:text-5xl'>Your Guide to Effortless <span className='text-blue-400'>Metro Manila</span> Commuting</h1>
          <p className='text-sm text-center text-slate-300 md:text-base'>Streamline your daily commute with our user-friendly web app, offering a curated collection of transportation routes. </p>
        </div>
        <Link to={'/routes'} className='pulse-btn flex-center gap-1 bg-blue-400 text-[#10151D] font-semibold py-2 px-4 rounded-md shadow-md'>
          <Icon icon="mingcute:route-fill" width={22}/>
          Browse Routes
        </Link>
      </div>
    </div>
  )
}

const BannerBG = () => {
  return <div className='bg-main'></div>
}


export {Banner, BannerBG};
