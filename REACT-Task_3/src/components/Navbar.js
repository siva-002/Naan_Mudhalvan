import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navcontainer'>
        <div className='logo'>Siva</div>
        <ul className='navbar'>
               <Link to="/home"> <li>Home</li></Link>
               <Link to="/message"> <li>Message</li></Link>
               <Link to="/about"> <li>About</li></Link>
        </ul>
    </div>
  )
}

export default Navbar