import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
        <div className="mycontainer flex justify-between items-center py-4 px-5">
          <div className="logo font-bold text-2xl">Password</div>
          <ul>
              <li className='flex gap-3'>
                  <a className='hover:font-bold' href="/">Home</a>
                  <a className='hover:font-bold' href="#">About</a>
                  <a className='hover:font-bold' href="#">Contact </a>
              </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar