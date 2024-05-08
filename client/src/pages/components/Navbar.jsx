import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <header>
            <h1>Croto Blog</h1><br /><h2><small>el espacio para hablar y reirse con familia y amigos</small></h2>
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