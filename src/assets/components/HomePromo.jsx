import React, { useEffect, useRef } from 'react';
import Cook from '../components/cook.png';
import { Link } from 'react-router-dom';

function HomePromo(props) {
  const promoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // added classes wehn element is in view
            entry.target.classList.remove('opacity-0', '-translate-x-10');
            entry.target.classList.add('opacity-100', 'translate-x-0');
          }
        });
      },
      {
        threshold: 0.1, // Triggering when10% is visible
      }
    );

    if (promoRef.current) {
      observer.observe(promoRef.current);
    }

    return () => {
      if (promoRef.current) {
        observer.unobserve(promoRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={promoRef}
      className='text-white flex justify-center w-full opacity-0 transform -translate-x-10 transition-all duration-500 ease-in-out'
    >
      <div className='border-teal-100 h-fit w-full md:max-w-3xl md:text-sm flex flex-col'>
        <div className='border-red-400 h-64 w-64 mx-auto'>
          <img src={props.img} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='h-fit rounded-lg'>
          <h1 className='text-5xl md:text-7xl font-bold text-center text-emerald-50'>{props.title}</h1>
        </div>
        <div className='text-xs md:text-base text-center text-emerald-50 px-4'>
{props.desc}
        </div>
        <div className='border-gray-300 flex'>
          <div className='mx-auto w-1/3 md:w-1/5 h-10 rounded-3xl text-center bg-emerald-700 transition hover:bg-emerald-950 flex text-white items-center justify-center '>
            <Link to="/dashboard" className='my-1'>{props.link}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePromo;
