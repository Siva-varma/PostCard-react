import React, { useState } from 'react'
import NavBar from './components/NavBar'
import PostCard from './components/PostCard'
import AddPostForm from './components/AddPostForm'

const App = () => {

  const [toggle, setToggle] = useState(false)

  let [posts, setPosts] = useState([
  ])

  const [editPost, setEditPost] = useState(null);

   let handleDelete = (id) => {
    let filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts)

  };
  return (
    <div className='w-screen min-h-screen h-screen'>
      <NavBar toggle={toggle} setToggle={setToggle} />
      {toggle ? ( 
        <AddPostForm 
        setPosts={setPosts} 
        setToggle={setToggle} 
        setEditPost={setEditPost} 
        editPost={editPost} 
        /> 
        ): (
          posts.length > 0 ?(
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          posts.map((post) => (
            <PostCard 
            key={post.id} 
            post={post} 
            handleDelete={handleDelete} 
            setToggle={setToggle} 
            setEditPost={setEditPost} 
            />
          ))
        }
      </div>
          ) : (
            <div className='w-full h-[80vh] flex flex-col gap-4 items-center justify-center'>
              <h2 className='text-2xl font-bold'>No Posts Found</h2>
              <button className="bg-blue-500 hover:bg-blue-700 active:scale-95 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setToggle(true)}>
                Add Post
              </button>
            </div>
          )
        )}
    </div>
  )
}

export default App