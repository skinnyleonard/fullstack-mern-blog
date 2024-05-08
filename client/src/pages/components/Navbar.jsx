import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <header>
            <h1>Croto Blog</h1><br /><small>el espacio para hablar y reirse con familia y amigos</small>
            <ul>
                <li><h2><Link to={'/'}>Casita</Link></h2></li>
                <li><h2><Link to={'/new'}>Postea algo</Link></h2></li>
            </ul>
        </header>
        <hr />
    </>
  )
}

export default Navbar