import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const FareCard = ({title, path}) => {
  return (
    <a href={path} target='_blank' className='w-full flex-center justify-between text-slate-300 bg-[#161E29] border border-[#2E3C51] rounded-md p-4 md:px-8 md:py:4'>
      <div className='grid gap-2'>
        <h3 className='text-blue-400 uppercase'>{title}</h3>
        <p className='text-sm'>Click to view the fare matrix</p>
      </div>
      <Icon icon={'tabler:chevron-right'} width={32}/>
    </a>
  )
}

export default FareCard
