import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className='bg-gray-400 backdrop-blur-md text-black px-8 h-[10vh] flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Posts</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>
              <i className="ri-image-add-line"></i><span className='ms-2'>Add User</span></button>
        </nav>
    </div>
  )
}

export default NavBar