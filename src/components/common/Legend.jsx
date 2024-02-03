import React from 'react'

const Legend = () => {
  return (
    <div className='flex-center text-xs text-slate-300'>
      <div className="grid w-100">
        <span className="bg-green-400 h-4"></span>
        <p className='px-2'>Light</p>
      </div>
      <div className="grid w-100">
        <span className="bg-yellow-400 h-4"></span>
        <p className='px-2'>Moderate</p>
      </div>
      <div className="grid w-100">
        <span className="bg-red-400 h-4"></span>
        <p className='px-2'>Heavy</p>
      </div>

    </div>
  )
}

export default Legend
