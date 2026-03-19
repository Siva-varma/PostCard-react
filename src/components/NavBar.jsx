import React from 'react'

const NavBar = ({ setToggle, toggle }) => {
  return (
    <div>
        <nav className='bg-gray-400 backdrop-blur-md text-black px-8 h-[10vh] flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Posts</h1>
            <button onClick={() => setToggle((prev) => !prev)} className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>
              {toggle ? "Close" : "Add Post"}
              </button>
        </nav>
    </div>
  )
}

export default NavBar