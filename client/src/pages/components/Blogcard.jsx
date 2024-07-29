import React from 'react'
import { deleteBlogRequest } from '../../api/blosg.api'
import { useBlogs } from './BlogContext'
import { Link, useNavigate } from 'react-router-dom'

function Blogcard({ e }) {

  const {handleDelete} = useBlogs()
  const colors = ["#018aff", "#ff7c01", "#01ff56"]
  var rand = colors[Math.floor(colors.length * Math.random())]

  return (
    <>
      <div className="blogs" onClick={() => window.location.href = `/post/${e.id}`}
        style={{border: `3px dashed ${rand}`, background: `${rand + "1c"}`}}>
        <img src={e.image}/>
        <h1>{e.post}</h1>
        <h2>{e.name}</h2>
        <p><small>{e.createAt}</small></p>
      </div>
        {/* <button onClick={() => handleDelete(e.id)}>eliminar</button> */}
    </>
  )
}

export default Blogcard