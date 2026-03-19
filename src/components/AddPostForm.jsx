import React from 'react'
import {set, useForm} from "react-hook-form"
import { nanoid } from 'nanoid'

const AddPostCard = ({ setPosts, setToggle, setEditPost, editPost }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm(
    { mode: "onChange",
      defaultValues: editPost
     }
  )

  let handleFormSubmit = (data) => {
    if(editPost){
      setPosts((prev) => {
        return prev.map((val) => {
          return val.id === editPost.id
            ? { ...val, ...data }
            : val;  
        });
      });
      setEditPost(null);
    }else{
       setPosts((prev) => [...prev, { ...data, id: nanoid() }]);
    }
    reset()
    setToggle(false)
  }
  return (
    <div className="w-screen min-h-[90%] flex flex-col items-center justify-center">
      <form 
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full max-w-sm bg-white shadow-md border border-gray-300 rounded p-4 mb-4 flex flex-col gap-6 items-center justify-center">

        <h2 className="font-bold text-2xl">Add New Post</h2>

        <div className='w-full'>
          <label className="block text-gray-700 text-sm font-bold mb-2">Image Url:</label>
          <input
          {...register("imageUrl", { required: "Image URL is required" })}
          placeholder='Add Image Url...' 
          type="text"
          className=" border rounded w-full py-2 px-3" />
        </div>

        <div className='w-full'>
          <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <input
           {...register("description", { required: "Description is required" })} 
           placeholder='Add Description...'
           className="border rounded w-full py-2 px-3"></input>
        </div>

        <button  
        className="bg-blue-500 hover:bg-blue-700 active:scale-95 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        type="submit" disabled={!isValid}>
          {editPost ? "Update Post" : "Create Post"}
          </button>
      </form>
    </div>
  )
}

export default AddPostCard