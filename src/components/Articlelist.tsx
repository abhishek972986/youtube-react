import { useBlogStore } from "./blogStore";
import { MdDelete } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const ArticleList = ({onEdit}:{onEdit:()=>void}) => {
  const { blogs , deleteBlog} = useBlogStore(); // Get all blogs from Zustand
  const [save, setsave]=useState(false)

  return (
    <div className="border-2 text-2xl p-5 w-full mt-2 h-[85%] max-h-[70vh] overflow-y-scroll">
      <h1 className="text-3xl font-bold text-center mb-5">Blog Articles</h1>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs available</p>
      ) : (
        <div className="flex flex-col gap-5  items-center w-full">
          {blogs.map((blog) => (
            
            <div key={blog.id} className="border p-3 rounded-lg shadow-md w-[50%]">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-700">By {blog.author}</p>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover mt-2 rounded-md"
              />
              
              <p className="mt-2">{blog.description}</p>
              <button className="p-1 mr-2 cursor-pointer text-2xl border-2 rounded-4xl" onClick={()=>setsave(!save)}> {
                save? <CiBookmark className=" text-4xl  p-1"/>:<FaBookmark className=" text-4xl  p-1"/>} </button>

<button className="p-1 cursor-pointer  mr-2 text-2xl bg-blue-500 rounded-4xl" onClick={onEdit}> <FaEdit className=" text-4xl text-white p-1"/> </button>
              <button className="p-1 mr-2 cursor-pointer text-2xl bg-red-500 rounded-4xl" onClick={()=>deleteBlog(blog.id)}> <MdDelete  className=" text-4xl text-white p-1"/> </button>

             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleList;
