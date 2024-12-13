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
      <div className="fixed left-0 w-full z-50 bg-white shadow-md ">
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
        <CategoryList id="div1" title="Foley Of Hearth" desc="Step into the Viking hearth where every sound tells a story—wood crackling, fire popping, and the rhythm of daily life. Our Foley collection brings to life the sounds of a Viking home, offering an authentic auditory experience of ancient indoor life." img="https://files.oaiusercontent.com/file-WLxh5NwTmeUk9ZNBD8iRop?se=2024-12-13T20%3A09%3A32Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df3298d7a-6a7f-4f1f-9696-c689a37adfcf.webp&sig=yrNF24Tv2eZRAYFNAQYU3TVwDLkMOPk7OwU9qEWF1js%3D"/>
        <CategoryList id="div1" title="Ambience Winds and Fireside Echoes" desc="Immerse yourself in the primal sounds of Viking landscapes—howling winds, crackling fires, and the distant rumble of nature’s fury." img="https://cdn.pixabay.com/photo/2019/11/04/19/07/viking-4601896_1280.jpg"/>
        <CategoryList id="div1" title="Epic Background Scores of the Norse Realm" desc="Immerse yourself in the dramatic and epic soundscapes of Viking legends, capturing the essence of battles, bravery, and ancient sagas. Each track evokes the strength of Norse warriors and their timeless tales.

." img="https://cdn.pixabay.com/photo/2020/05/29/17/12/sunset-5235908_1280.jpg"/>
        <CategoryList title ="Thunderous Traps and Rhythmic Fury" desc="A storm of raw power and energy, echoing the relentless beats and thundering rhythms that embody the spirit of battle and conquest." img ="https://api.deepai.org/job-view-file/d3f3b841-faef-4f3c-8b53-235b2bb01150/outputs/output.jpg?art-image=true"/>


        </div>
        
      </div>
    </div>
  );
}

export default ProfileHome;
