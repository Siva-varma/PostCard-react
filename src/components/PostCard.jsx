import React from 'react'

const PostCard = ({ post, handleDelete, setToggle, setEditPost }) => {
  return (
        <div className='  bg-white shadow-sm hover:shadow-lg p-4 rounded-xl m-4 flex flex-col items-center overflow-hidden relative'>
          <div className='w-full h-50 rounded-xl overflow-hidden'>          
            <img className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' src={post.imageUrl} alt="" />
          </div>
           <p className='text-gray-600 mt-3'>{post.description}</p>
            <div className='flex  justify-center items-center gap-6 mt-3'>
              <button 
                onClick={()=>{
                  setEditPost(post);
                  setToggle(true)
                }}
                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 active:scale-90'>
                <i className="ri-image-edit-line"></i>
                <span className='ms-2'>Edit</span>
              </button>
              <button 
                onClick={() => handleDelete(post.id)}
              className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 active:scale-90'>
                <i className="ri-delete-bin-line"></i>
                <span className='ms-2'>Delete</span>
              </button>
            </div>
        </div>
    
  )
}

export default PostCard