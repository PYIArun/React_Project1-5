import React from 'react'
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className='container'>
        <div>
            <img src='./images/navlogo.png'></img>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation