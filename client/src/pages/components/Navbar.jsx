import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import image from '../../windows-live-messenger-2012.webp'

function Navbar() {
  var i = 0;
  var txt = "el espacio para hablar y reirse con familia y amigos"
  var speed = 50;

  function typeWriter(){
    if(i<txt.length){
      document.querySelector("header small").innerHTML += txt.charAt(i)
      i++
      setTimeout(typeWriter, speed)
    }
  }

  return (
    <>
        <header>
            <h1>superblog</h1>
            <img src={image} alt="icon" />
            <h2><small onLoad={useEffect(() => {typeWriter()})}></small></h2>
            <ul>
                <li><h2><a href="/">Casita <FontAwesomeIcon icon={faHouse} /></a></h2></li>
                <li><h2><Link to={'/new'}>
                Postea algo <FontAwesomeIcon icon={faShareFromSquare} /></Link></h2></li>
            </ul>
        </header>
    </>
  )
}

export default Navbar