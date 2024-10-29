import React from 'react';

function FeatureCard(props) {
  return (
    <div className=" h-60 w-1/2  sm:w-60 md:w-72 rounded-xl shrink-0  bg-cover bg-center filter  contrast-125 flex flex-col p-3">
      <p className='text-zinc-200 font-bold text-2xl border-y-  mx-auto mt-3'>{props.title}</p>
      <hr className='mx-8 border-0.5 mt-2 bg-gray-500'/>
      <div className='h-8 w-8 border rounded-full scale-150 mx-auto mt-4 mb-4 ]'>
        <img src={props.img} alt="" className='h-full w-full rounded-full'/>
      </div>
      <p className='text-center text-xs text-zinc-400'>{props.desc}
      </p>
      <p className='text-center text-sm text-gray-200'>Learn More</p>


    </div>
  );
}

export default FeatureCard;
