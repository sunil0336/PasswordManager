import React from "react";
import add from '../assets/add.png'
import show from '../assets/show.svg'
import hide from '../assets/hide.svg'
import { useRef } from "react";

const Manager = () => {
  const ref =useRef()
  const pwd = () => {
    if(ref.current.src.includes(hide)){
      ref.current.src = show
    }else{
      ref.current.src = hide
    }
  }
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="max-w-4xl mycontainer">
        <h1 className="text-4xl text font-bold text-center text-white">Password</h1>
        <p className="text-green-400 text-lg text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ipsum.</p>

        <div className="flex flex-col p-4 text-black gap-6 items-center">
            <input placeholder="Enter Website URL" className="rounded-full border border-green-500 w-full text-black px-4 py-1" type="text" name="" id="" />
            <div className="flex w-full gap-6">
              <input placeholder="Enter Username" className="rounded-full border border-green-500 w-full text-black px-4 py-1" type="text" name="" id="" /> 
              <div className="relative w-full">
                <input placeholder="Enter Password" className="rounded-full border border-green-500 w-full text-black px-4 py-1" type="text" name="" id="" />
                <img ref={ref} className="absolute right-[6px] top-[5px] cursor-pointer" src={show} alt="show" onClick={pwd}/>
              </div>
            </div>
            <button className="flex justify-center items-center gap-3 rounded-full bg-green-400 hover:bg-green-300 border border-green-700 px-6 py-2 w-fit"><img className="w-5" src={add} alt="add" />Add Password</button>
        </div>
      </div>
    </>
  );
};

export default Manager;
