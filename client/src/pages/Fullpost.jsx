import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogs } from "./components/BlogContext";

function Fullpost() {
  const { id } = useParams();

  const { blogs, loadBlogs } = useBlogs()
  useEffect(() => {
    loadBlogs()
  }, [])

  return (
    <>
        {blogs.filter(e => e.id == id).map(e => (
            <div className="blogs">
                <h1>{e.post}</h1>
                <h2>{e.name}</h2>
                <p><small>{e.createAt}</small></p>
            </div>
        ))}
    </>
  )
}

export default Fullpost;
