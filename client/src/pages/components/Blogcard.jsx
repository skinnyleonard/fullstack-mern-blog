import React from 'react'
import { deleteBlogRequest } from '../../api/blosg.api'
import { useBlogs } from './BlogContext'
import { Link, useNavigate } from 'react-router-dom'
import { Tilt } from 'react-tilt'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-regular-svg-icons' 

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            25,     // max tilt rotation (degrees)
	perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     false,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function Blogcard({ e }) {

  const {handleDelete} = useBlogs()
  const colors = ["#018aff", "#ff7c01", "#01ff56"]
  var rand = colors[Math.floor(colors.length * Math.random())]

  return (
    <>
    <Tilt options={defaultOptions} className="blogs" 
    style={{border: `3px dashed ${rand}`, background: `${rand + "1c"}`}}>
      <div onClick={() => window.location.href = `/post/${e.id}`}>
        <img src={e.image}/>
        <h1>{e.post}</h1>
        <FontAwesomeIcon icon={faUserCircle} className="faUser"/>
        <h2>{e.name}</h2>
        <p><small>{e.createAt}</small></p>
      </div>
        {/* <button onClick={() => handleDelete(e.id)}>eliminar</button> */}
      </Tilt>
    </>
  )
}

export default Blogcard