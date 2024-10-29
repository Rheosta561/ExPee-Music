import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Login from "./assets/components/Login";
import PromoGrid from "./assets/components/PromoGrid";
import Footer from "./assets/components/Footer";
import HomePromo from "./assets/components/HomePromo";
import CommentGrid from "./assets/components/CommentGrid";
import Cook from "../src/cook.png"
import Look from "../src/Look.png"
import Record from "../src/Record.png"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FeatureTray from "./assets/components/FeatureTray";


const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <div>
        <Login/>
      </div>
    ),
  },
  {
    path: "/",
    element: (
      <div className="hide-scrollbar overflow-hidden relative">
        <Navbar />
        
        <Logo />
        <br />
        <FeatureTray></FeatureTray>
     
  
        <HomePromo title="Cooked Something ?" desc="Enter the realm of Cooked in the Forge, where Viking-inspired beats are crafted with power and precision. This collection draws from the raw energy of ancient Nordic warriors, channeling rhythmic elements that echo the sounds of battle, victory, and celebration. Each beat is designed to stir the spirit, with pounding drums, rugged basslines, and melodies that capture the essence of Viking lore. Powered by AI, Cooked in the Forge merges traditional Norse themes with modern production, creating a unique soundscape that stands out for hip-hop, trap, and cinematic compositions. Perfect for artists looking to add a fierce, primal touch to their music, these beats are battle-ready and forged for greatness." img={Cook} link="Get Started"/>
        <br />
        <HomePromo title="Looking Something ?" desc="If ye be searching for beats, know ye’ve landed in the right place. From thunderous drums to stirring melodies, our Viking-forged collection spans every genre, ready to breathe life into your next creation. Here, AI meets ancient inspiration, blending the fierce spirit of the North with today’s rhythms. Whether ye seek pounding hip-hop, moody trap, or epic soundscapes, our library awaits with crafted beats to match any vision. Step boldly, for Looking for Beats holds the sounds that legends are made of—crafted for the brave, waiting to forge your next anthem." link="Get Started" img={Look}/>
        <br />
        <HomePromo title ="Recorded Something ?" link="Get Started" img={Record} desc="Recorded in the Saga is where every beat carries the echoes of Viking legends, recorded and perfected for those who seek a sound with power and depth. Here, the spirit of ancient storytellers meets cutting-edge AI, capturing rhythms that resonate across genres, from gritty hip-hop to haunting cinematic layers. Each beat holds the intensity of a saga, meticulously crafted to fuel your creative journey. If you’re ready to create music worthy of a true saga, this is where it begins—each beat recorded, tested, and ready for battle. Let Recorded in the Saga set the foundation for your next unforgettable track."/>
        <br />
        <PromoGrid />
        <br />
        <CommentGrid/>
        <br />
        <Footer />

      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
