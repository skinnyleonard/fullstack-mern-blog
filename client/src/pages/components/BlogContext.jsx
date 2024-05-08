import { createContext, useContext, useState } from "react";
import { deleteBlogRequest } from "../../api/blosg.api";

export const BlogContext = createContext();

export const useBlogs = () => {
    const context = useContext(BlogContext)
    if(!context) {
        throw new Error("useBlogs must be used within a BlogContextProvider")
    }
    return context
}

export const BlogContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([])
  const [comments, setComments] = useState([])

  function loadBlogs(){
    fetch('https://fullstack-mern-blog.onrender.com/blogs')
    .then(response => response.json())
    .then(json => setBlogs(json))
  }
  
  const handleDelete = async (id) => {
    try {
     const response = await deleteBlogRequest(id)
     setBlogs(blogs.filter(e => e.id != id))
     console.log(response)
    } catch (error) {
     console.error(error)
    }
  }
  async function loadComments (id){
    await fetch(`https://fullstack-mern-blog.onrender.com/comments/${id}`)
    .then(res => res.json())
    .then(json => setComments(json))
  }

  return (
    <BlogContext.Provider value={{ blogs, loadBlogs, handleDelete, comments, loadComments }}>
      {children}
    </BlogContext.Provider>
  );
};
