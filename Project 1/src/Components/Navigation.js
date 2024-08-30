import React from 'react'
import '../App.css';

function Navigation() {
  return (
    <>
    <nav>
        <div>
            <img src='./images/brand_logo.png'></img>
        </div>

        <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <button className='nav-btn'> Login </button>
    </nav>
    </>
  )
}

export default Navigation