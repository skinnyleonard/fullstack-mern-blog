import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <header>
            <h1>Blogsito roñoso <br/>re loco</h1>
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