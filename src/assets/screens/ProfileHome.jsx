import React , {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Search from '../screens/search.png';
import CatTitle from '../components/CatTitle';
import ProfileBar from '../components/Profilebar/ProfileBar';
import CategoryList from '../components/ProfileComponents/CategoryList';
import { useNavigate } from 'react-router-dom';

function ProfileHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const divArray = [
    { id: 'div1', content: 'Foley Elements and Sound Effects' },
    { id: 'div2', content: 'Background Scores and Background Music' },
    { id: 'div3', content: 'Traps and Drill Beats' },
    { id: 'div4', content: 'Vocal samples' },
  ];
  const filteredOptions = divArray.filter((div) =>
    div.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const navigate = useNavigate();
  // Handle selecting an option

  const windowNavigate = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const setSearchValue = (value) =>{
    setSearchQuery(value);
  }
  
  return (
    <div className="overflow-x-hidden w-screen">
      {/* ProfileBar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <ProfileBar />
      </div>

      {/* Main Content */}
      <div className="relative pt-20 p-3">
        {/* Search Bar Section */}
        <div className=" fixed left-0 z-20 opacity-95 h-15 md:h-20 rounded-xl bg-zinc-950 flex flex-col gap-2 w-full mx-auto -mt-3 p-4">
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded-full">
              <img src={Search} alt="Search" className="invert mt-2 scale-75" />
            </div>
            <div className="w-full rounded-lg bg-gray-800 opacity-55 flex items-center p-2 relative">
              <input
                type="text"
                placeholder="Type Here To Search"
                className="text-white text-center bg-transparent outline-none w-full"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDropdownVisible(true); 
                }}
                onFocus={() => setDropdownVisible(true)} 
                onBlur={() => setTimeout(() => setDropdownVisible(false), 200)} 
              />
            </div>
          </div>

          {/* Dropdown Suggestions */}
          {isDropdownVisible && searchQuery.trim() && (
            <div className="bg-white shadow-md rounded-lg absolute top-14 left-16 w-full z-40 max-h-40 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {windowNavigate(option.id); 
                      setSearchValue(option.content);
                    }}
                  >
                    {option.content}
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-400">No matches found</div>
              )}
            </div>
          )}
        </div>

        <br />
        {/* Repeated CatTitles */}
        <div className='pt-12' id="div2">
        <CategoryList id="div1"/>
        <CategoryList/>


        </div>
        
      </div>
    </div>
  );
}

export default ProfileHome;
