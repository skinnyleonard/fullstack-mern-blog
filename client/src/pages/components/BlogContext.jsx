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
  const [isloading, setIsloading] = useState(false)

  var spinner = document.querySelector('.lds-spinner')
  function loadSpinner(){
    spinner.classList.remove("display")
  }

  function loadBlogs(){
    setIsloading(true)
    fetch('http://localhost:4000/blogs')
    .then(response => response.json())
    .then(json => {setBlogs(json); setIsloading(false)})
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
    setIsloading(true)
    await fetch(`http://localhost:4000/comments/${id}`)
    .then(res => res.json())
    .then(json => {setComments(json); setIsloading(false)})
  }

  return (
    <BlogContext.Provider value={{ blogs, loadBlogs, handleDelete, comments, loadComments, isloading }}>
      {children}
    </BlogContext.Provider>
  );
};
