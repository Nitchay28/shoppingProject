
import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        
        <div className="left">
            <div className="title">
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Childern</li>
                <li>Beauty</li>
            </ul>
        </div>

        <div className="Search">
            <input type="text" placeholder='Search...' />
        </div>
        <div  className="right">
            <div className="signin"></div>
                Signin  / Signup
        </div>
        <div className="Cart">
                Cart
        </div>
            
        </div>
  )
}

export default Header