import React from 'react'
import github from "../assets/github.svg";


const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
        <div className="mycontainer flex justify-between items-center py-3 px-10">
          <div className="logo font-bold text-2xl">Password</div>
          {/* <ul>
              <li className='flex gap-3'>
                  <a className='hover:font-bold' href="/">Home</a>
                  <a className='hover:font-bold' href="#">About</a>
                  <a className='hover:font-bold' href="#">Contact</a>
              </li>
          </ul> */}
          <div>
            {/* <a href="https://github.com/sunil0336" target='_blank'>
              <img className='invert w-8' src={github} alt="githubLogo" />  
            </a> */}
              <button className='bg-green-95 bg-green-700 flex justify-between items-center rounded-full pr-1'>
                <img className='invert w-8' src={github} alt="githubLogo" />
                <span>Github</span> 
              </button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar