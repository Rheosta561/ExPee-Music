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
import ProfileHome from "./assets/screens/ProfileHome";
import Sidebar from "./assets/components/Sidebar";


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
     
  
        <HomePromo title="Cooked Something ?" desc="Cooked in the Forge delivers Viking-inspired beats crafted with AI, merging Norse themes and modern production. With pounding drums and fierce melodies, these battle-ready beats are perfect for hip-hop, trap, and cinematic tracks, stirring primal energy." img={Cook} link="Get Started"/>
        <br />
        <HomePromo title="Looking Something ?" desc="Seek no further! Our Viking-forged beats blend AI with ancient inspiration, delivering thunderous drums and stirring melodies. From hip-hop to cinematic soundscapes, craft your next anthem with sounds made for the bold and legendary." link="Get Started" img={Look}/>
        <br />
        <HomePromo title ="Recorded Something ?" link="Get Started" img={Record} desc="Recorded in the Saga delivers Viking-inspired beats infused with AI precision, blending ancient storytelling with modern sound. From gritty hip-hop to cinematic layers, these powerful beats fuel creativity, ready to set the stage for your next epic track."/>
        <br />
        <PromoGrid />
        <br />
        <CommentGrid/>
        <br />
        <Footer />

      </div>
    ),
  },
  {path:"/dashboard",
    element:(
      <div className="flex flex-row  ">
        
        <ProfileHome/>
      </div>

    ),

  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
