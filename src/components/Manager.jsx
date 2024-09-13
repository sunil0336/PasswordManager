import React, { useEffect } from "react";
import add from "../assets/add.png";
import show from "../assets/show.svg";
import hide from "../assets/hide.svg";
import { useRef, useState } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const pwd = () => {
    if (ref.current.src.includes(hide)) {
      ref.current.src = show;
    } else {
      ref.current.src = hide;
    }
  };
  const savepwd = () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="max-w-4xl mycontainer">
        <h1 className="text-4xl text font-bold text-center text-white">
          Password
        </h1>
        <p className="text-green-400 text-lg text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
          ipsum.
        </p>

        <div className="flex flex-col p-4 text-black gap-6 items-center">
          <input
            value={form.site}
            onChange={handlechange}
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full text-black px-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full gap-6">
            <input
              value={form.username}
              onChange={handlechange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full text-black px-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative w-full">
              <input
                value={form.password}
                onChange={handlechange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full text-black px-4 py-1"
                type="text"
                name="password"
                id=""
              />
              <img
                ref={ref}
                className="absolute right-[6px] top-[5px] cursor-pointer"
                src={show}
                alt="show"
                onClick={pwd}
              />
            </div>
          </div>
          <button
            onClick={savepwd}
            className="flex justify-center items-center gap-3 rounded-full bg-green-400 hover:bg-green-300 border border-green-700 px-6 py-2 w-fit"
          >
            <img className="w-5" src={add} alt="add" />
            Add Password
          </button>
        </div>
        <div className="passwords text-white">
          <h1 className="font-bold text-2xl pb-4">Your Passwrods</h1>
          {passwordArray.length === 0 && <div>No Passwords</div>}
          {passwordArray.length !=0 &&
          <table className="table-auto w-full  rounded-lg overflow-hidden">
            <thead className=" bg-green-800">
              <tr>
                <th className="py-2">SITE</th>
                <th className="py-2">USERNAME</th>
                <th className="py-2">PASSWORDS</th>
              </tr>
            </thead>
            <tbody className="bg-green-100 text-black">
              {passwordArray.map((item)=>{
                return <tr>
                <td className="py-2 px-1 border border-white text-center w-32">{item.site}</td>
                <td className="py-2 px-1 border border-white text-center w-32">{item.username}</td>
                <td className="py-2 px-1 border border-white text-center w-32">{item.password}</td>
              </tr>
              })}
              
            </tbody>
          </table>
          }
        </div>
      </div>
    </>
  );
};

export default Manager;
