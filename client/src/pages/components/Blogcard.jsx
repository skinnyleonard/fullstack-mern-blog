import React from 'react'
import { deleteBlogRequest } from '../../api/blosg.api'
import { useBlogs } from './BlogContext'
import { Link, useNavigate } from 'react-router-dom'

function Blogcard({ e }) {

  const {handleDelete} = useBlogs()

  return (
    <>
      <div className="blogs" onClick={() => window.location.href = `/post/${e.id}`}>
        <h1>{e.post}</h1>
        <h2>{e.name}</h2>
        <p><small>{e.createAt}</small></p>
      </div>
        {/* <button onClick={() => handleDelete(e.id)}>eliminar</button> */}
    </>
  )
}

export default Blogcard