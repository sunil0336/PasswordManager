import React from 'react'
import github from "../assets/github.svg";


const Navbar = () => {
  return (
    <nav className="bg-[#593BD1] text-white">
      <div className="mycontainer flex justify-between items-center py-2 px-10">
        <div className="logo font-bold text-2xl">Password</div>
        <div>
          {/* <a href="https://github.com/sunil0336" target='_blank'>
              <img className='invert w-8' src={github} alt="githubLogo" />  
            </a> */}
          <button className='bg-green-95 bg-[#000235] flex justify-between items-center rounded-xl p-1'>
            {/* <span onClick="https://github.com/sunil0336 x" className='font-bold px-2'>Github</span> */}
            <a href="https://github.com/sunil0336" target="_blank" rel="noopener noreferrer" className='font-bold px-2 flex pt-1'>
              <img className='invert w-8' src={github} alt="githubLogo" />
              Github
            </a>

          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar