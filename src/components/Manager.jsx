import React, { useEffect, useRef, useState } from "react";
import add from "../assets/add.png";
import show from "../assets/show.svg";
import hide from "../assets/hide.svg";
import copy from "../assets/copy.svg";
import edit from "../assets/edit.svg";
import deletee from "../assets/delete.svg";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const [showPopup, setShowPopup] = useState(null);

  const getpwd = async () => {
    let req = await fetch("http://localhost:3000/");
    let passwords = await req.json();
    setPasswordArray(passwords);
  };

  useEffect(() => {
    getpwd();
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

  const savepwd = async (e) => {
    e.preventDefault(); // Prevent form submission
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);

    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, id: uuidv4() })
    });

    setform({ site: "", username: "", password: "" });
  };

  const delpwd = async (id) => {
    let c = confirm("Do you want to delete this Password?");
    if (c) {
      setPasswordArray(passwordArray.filter(item => item.id !== id));
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
    }
  };

  const editpwd = (id) => {
    setform({ ...passwordArray.filter((i) => i.id === id)[0], id: id });
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
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
      <div className="relative min-h-screen w-full items-center px-5 py-24">
        {/* main div */}
        <div className="flex flex-col p-6 pb-12 items-center justify-center">
          {/* <div className="w-[700px] h-[325px] p-8 bg-[#1E1E1E] rounded-xl"> */}
          <div className="w-full max-w-[700px] h-auto -mt-24 p-6 sm:p-8 bg-[#1E1E1E] rounded-xl mx-auto">

            <h1 className="text-4xl text font-bold text-center text-white">
              Password
            </h1>
            <p className="text-white text-lg text-center">
              "Secure your secrets, manage your passwords with ease."
            </p>

            <form onSubmit={savepwd} className="flex flex-col p-4 text-black gap-6 items-center">
              <input
                value={form.site}
                onChange={handlechange}
                placeholder="Enter Website URL"
                className="rounded-xl text-white bg-[#422DA8] w-full text-black px-4 py-2"
                type="text"
                name="site"
                id="site"
              />
              <div className="flex w-full gap-6">
                <input
                  value={form.username}
                  onChange={handlechange}
                  placeholder="Enter Username"
                  className="rounded-xl text-white bg-[#422DA8] w-full text-black px-4 py-2"
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
                    className="rounded-xl text-white bg-[#422DA8] w-full text-black px-4 py-2"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <img
                    ref={ref}
                    className="absolute right-[8px] top-[9px] cursor-pointer"
                    src={show}
                    alt="show"
                    onClick={pwd}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex justify-center items-center gap-3 rounded-xl text-white bg-[#000235] hover:bg-[#593BD1] px-7 py-3 w-fit"
              >
                <img className="w-5 filter invert" src={add} alt="add" />
                Save Password
              </button>
            </form>
          </div>

          <div className="passwords text-white">
            <h1 className="font-bold text-2xl pb-4 pt-4 text-center text-white [text-shadow:0_0_15px_#593BD1,0_0_30px_#422DA8,0_0_60px_#422DA8]">
              Your Passwords
            </h1>
            {passwordArray.length === 0 && <div>No Passwords</div>}

            <div className="flex flex-wrap gap-2 w-[90vw] justify-center">
              {passwordArray.map((item, index) => {
                return (
                  <div key={index} className="bg-[#1E1E1E] w-[290px] w-60 rounded-xl p-4 relative">
                    <div className="flex flex-col pr-2">
                      <button
                        onClick={() => setShowPopup(index)}
                        className="text-white font-bold bg-[#422DA8] w-14 flex px-2 mb-2 rounded-xl hover:bg-[#593BD1]  text-center"
                      >
                        More
                      </button>

                      {/* Popup for Edit and Delete */}
                      {showPopup === index && (
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
                          <div className="bg-black rounded-xl p-2 w-[150px] flex flex-col items-center">
                            <button
                              onClick={() => editpwd(item.id)}
                              className="mb-1 flex justify-center text-black bg-[#593BD1] w-full p-1 rounded-xl hover:bg-[#422DA8]"
                            >
                              Edit <img src={edit} alt="" />
                            </button>
                            <button
                              onClick={() => delpwd(item.id)}
                              className="text-white flex justify-center bg-[#F44336] w-full py-1 rounded-xl hover:bg-[#D32F2F]"
                            >
                              Delete <img src={deletee} alt="" />
                            </button>
                            <button
                              onClick={() => setShowPopup(null)}
                              className="mt-1 text-black bg-[#eeeeee] w-full py-1 rounded-xl hover:bg-[#cccccc]"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="relative w-full">
                        <span
                          className="absolute top-[-6px] left-[20px] text-s text-white font-semibold"
                        >
                          Website
                        </span>
                        <span
                          className="w-[250px] h-[50px] rounded-xl text-white bg-[#422DA8] w-full text-black px-4 py-2 m-2 inline-block cursor-pointer overflow-hidden"
                        >
                          <a
                            href={item.site}
                            className="block whitespace-nowrap truncate"
                            target="_blank"
                          >
                            {item.site}
                          </a>
                        </span>
                      </div>

                      <div className="relative w-full">
                        <span
                          className="absolute top-[-6px] left-[20px] text-s text-white font-semibold"
                        >
                          Username
                        </span>
                        <div className="w-[250px] h-[50px] rounded-xl text-white bg-[#422DA8] w-full text-black px-4 py-2 m-2 inline-block cursor-pointer flex items-center justify-between block whitespace-nowrap truncate">
                          <span className="truncate w-full">{item.username}</span>
                          <img
                            className="cursor-pointer"
                            src={copy}
                            alt="Copy"
                            onClick={() => {
                              copytext(item.username);
                            }}
                          />
                        </div>
                      </div>

                      <div className="relative w-full">
                        <span
                          className="absolute top-[-6px] left-[20px] text-s text-white font-semibold"
                        >
                          Password
                        </span>
                        <div className="w-[250px] h-[50px] rounded-xl text-white bg-[#422DA8] w-full text-black px-4 py-2 m-2 inline-block cursor-pointer flex items-center justify-between block whitespace-nowrap truncate">
                          <span className="truncate w-full">{"*".repeat(item.password.length)}</span>
                          <img
                            className="cursor-pointer"
                            src={copy}
                            alt="Copy"
                            onClick={() => {
                              copytext(item.password);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
