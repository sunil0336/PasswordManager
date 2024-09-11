import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="bg-slate-50 max-w-4xl mycontainer">
        <h1 className="text-4xl">Password</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ipsum.</p>
        <div className="text-red-600 flex flex-col p-4">
            <input className="rounded-full" type="text" name="" id="" />
            <div className="flex">
            <input type="text" name="" id="" /> 
            <input type="text" name="" id="" /> 
            </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
