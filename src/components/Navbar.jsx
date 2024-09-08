import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-200 flex justify-between items-center py-3 px-5">
        <div className="logo font-bold">Password</div>
        <ul>
            <li className='flex gap-3 font-bold'>
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar