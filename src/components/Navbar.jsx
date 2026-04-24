import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <div className='nav-bar-container'>
        <Link to="/">ShopNest</Link>
        <div className='nav-bar-link'>
           <Link to="/auth">Auth</Link>
            <Link to="/checkout">Checkout</Link>
        </div>
          <div className='nav-auth'>
          <div className='nav-bar-auth'>
            <Link to="/auth" className='btn btn-primary'>
              Login
            </Link>
            <Link to="/auth" className='btn btn-secondary'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar