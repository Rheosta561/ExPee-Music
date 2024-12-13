import React from 'react';
import Sidebar from '../components/Sidebar';
import Search from '../screens/search.png';
import CatTitle from '../components/CatTitle';
import ProfileBar from '../components/Profilebar/ProfileBar';
import CategoryList from '../components/ProfileComponents/CategoryList';

function ProfileHome() {
  return (
    <div className="overflow-x-hidden w-screen">
      {/* Fixed ProfileBar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <ProfileBar />
      </div>

      {/* Main Content */}
      <div className="relative pt-20 p-3">
        {/* Search Bar Section */}
        <div className=" fixed left-0 z-50 opacity-95 h-15 md:h-20 rounded-xl bg-zinc-950 o flex gap-2 md:gap-4  w-full mx-auto -mt-3 p-4">
          <div className="h-10 w-10 rounded-full">
            <img src={Search} alt="Search" className="invert mt-2 scale-75" />
          </div>
          <div className="w-full rounded-lg bg-gray-800 opacity-55 flex justify-center items-center p-2">
            <p className="text-white text-md">Type Here To Search</p>
          </div>
        </div>

        <br />
        {/* Repeated CatTitles */}
        <div className='pt-12'>
        <CategoryList/>
        <CategoryList/>


        </div>
        
      </div>
    </div>
  );
}

export default ProfileHome;
