import React from "react";
import CatTitle from "../CatTitle";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  return (
    <div className=" flex flex-col p-2">
      <CatTitle />
      <div className="  ">
      <div className="bg-zinc-950 opacity-75 mt-2 h-64 md:h-96 md:w-2/3 md:mx-auto rounded-lg p-1.5 flex flex-col">
        <div className="w-full h-5/6 bg-violet-900 rounded-lg bg-[url('https://files.oaiusercontent.com/file-WLxh5NwTmeUk9ZNBD8iRop?se=2024-12-13T20%3A09%3A32Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df3298d7a-6a7f-4f1f-9696-c689a37adfcf.webp&sig=yrNF24Tv2eZRAYFNAQYU3TVwDLkMOPk7OwU9qEWF1js%3D')] bg-cover"></div>
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
