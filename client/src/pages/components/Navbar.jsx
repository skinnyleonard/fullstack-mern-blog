import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import image from '../../windows-live-messenger-2012.webp'

function Navbar() {
  return (
    <>
        <header>
            <h1>crotoblog</h1>
            <img src={image} alt="icon" />
            <h2><small>el espacio para hablar y reirse con familia y amigos</small></h2>
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