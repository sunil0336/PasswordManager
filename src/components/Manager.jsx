import React, { useEffect } from "react";
import add from "../assets/add.png";
import show from "../assets/show.svg";
import hide from "../assets/hide.svg";
import copy from "../assets/copy.svg";
import edit from "../assets/edit.svg";
import deletee from "../assets/delete.svg";
import { useRef, useState } from "react";
import {ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const pwd = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes(hide)) {
      ref.current.src = show;
      passwordRef.current.type = "password";
    } else {
      ref.current.src = hide;
      passwordRef.current.type = "text";
    }
  };
  const savepwd = () => {
    setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
    console.log([...passwordArray, form]);
    setform({ site: "", username: "", password: "" });
  };

  const delpwd = (id) => {
    console.log("Deleting pwd id: ", id)
    let c = confirm("Do you want to delete this Password?");
    if(c){
      setPasswordArray(passwordArray.filter(item=>item.id!==id));
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
    }
  };

  const editpwd = (id) => {
    console.log("Editing pwd id: ", id)
    setform(passwordArray.filter(i=>i.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!==id));
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copytext = (text) => {
    toast("Copied to Clipboard!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="max-w-4xl p-2 md:mycontainer min-h-[88.2vh]">
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
              id="username"
            />
            <div className="relative w-full">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handlechange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full text-black px-4 py-1"
                type="password" 
                name="password"
                id="password"
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
            Save Password
          </button>
        </div>
        <div className="passwords text-white">
          <h1 className="font-bold text-2xl pb-4">Your Passwrods</h1>
          {passwordArray.length === 0 && <div>No Passwords</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-lg overflow-hidden mb-10">
              <thead className=" bg-green-800">
                <tr>
                  <th className="py-2">SITE</th>
                  <th className="py-2">USERNAME</th>
                  <th className="py-2">PASSWORDS</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 text-black">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 px-1 border border-white text-center">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <img
                            className="cursor-pointer"
                            src={copy}
                            alt="Copy"
                            onClick={() => {
                              copytext(item.site);
                            }}
                          />
                        </div>
                      </td>
                      <td className="py-2 px-1 border border-white text-center w-32">
                        <div className="flex items-center justify-center">
                          {item.username}
                          <img
                            className="cursor-pointer"
                            src={copy}
                            alt="Copy"
                            onClick={() => {
                              copytext(item.username);
                            }}
                          />
                        </div>
                      </td>
                      <td className="py-2 px-1 border border-white text-center w-32">
                        <div className="flex items-center justify-center">
                          {item.password}
                          <img
                            className="cursor-pointer"
                            src={copy}
                            alt="Copy"
                            onClick={() => {
                              copytext(item.password);
                            }}
                          />
                        </div>
                      </td>
                      <td className="py-2 px-1 border border-white text-center w-32">
                        <div className="flex">
                          <span onClick={()=>editpwd(item.id)} className="cursor-pointer mx-2">
                            <img src={edit} alt="edit" />
                          </span>
                          <span onClick={()=>delpwd(item.id)} className="cursor-pointer">
                            <img src={deletee} alt="delete" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
