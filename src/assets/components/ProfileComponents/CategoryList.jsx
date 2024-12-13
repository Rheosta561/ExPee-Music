import React from "react";
import CatTitle from "../CatTitle";
import CategoryItem from "./CategoryItem";

function CategoryList(props) {
  return (
    <div className=" flex flex-col p-2">
      <CatTitle title={props.title} desc={props.desc} />
      <div className="  ">
      <div className="bg-zinc-950 opacity-75 mt-2 h-64 md:h-96 md:w-2/3 md:mx-auto rounded-lg p-1.5 flex flex-col">
        <div className="w-full h-5/6 bg-violet-900 rounded-lg " style={{ backgroundImage: `url(${props.img})`, backgroundSize: 'cover' }}></div>
        <div className="flex justify-between items-center px-2  h-1/6">
            <div className="text-gray-400 text-md">Foley Home </div>
            <div className="text-zinc-500 text-sm"> 59 Results | Free</div>
        </div>

      </div>
      <div className="flex flex-col overflow-y-scroll md:w-2/3 md:mx-auto">
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        

      </div>

      </div>
      
    </div>
  );
}

export default CategoryList;
