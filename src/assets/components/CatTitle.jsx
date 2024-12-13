import React from 'react'

function CatTitle(props) {
  return (
    <div className='md:w-2/3 md:mx-auto'>
        <div className='text-emerald-50 text-6xl font-bold'>
        {props.title}</div>
        <p className='text-gray-400 text-xs  md:text-sm'>{props.desc}</p>
    </div>
    
  )
}

export default CatTitle