import React from 'react'

function CatTitle(props) {
  return (
    <div>
        <div className='text-emerald-50 text-6xl font-bold'>
        CatTitle{props.title}</div>
        <p className='text-gray-400 text-xs  md:text-sm'>{props.desc}Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio labore maiores sequi repellat voluptatem. Perferendis velit neque molestiae soluta cumque? Vel, et?</p>
    </div>
    
  )
}

export default CatTitle