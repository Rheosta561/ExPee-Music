import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../screens/search.png'
import CatTitle from '../components/CatTitle'

function ProfileHome() {
  return (
    <div className='overflow-x-hidden w-screen '>
        <div className=' h-20 rounded-xl bg-zinc-950 opacity-50 flex gap-4 mt-2 w-3/4 mx-auto p-4' >
        <div className=' h-10 w-10 rounded-full '>
            <img src={Search} alt="" className='invert mt-2'/>
        </div>
        <div className=' w-full rounded-lg bg-gray-800 opacity-55 flex justify-center items-center'>
            <p className='text-white text-xl  '>Type Here To Search</p>
        </div>
        </div>
        <CatTitle/>
    </div>
  )
}

export default ProfileHome