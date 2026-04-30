import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {

  const {user, logout} = useAuth()

  return (
    <nav className='nav-bar'>
      <div className='nav-bar-container'>
        <Link to="/">ShopNest</Link>
        <div className='nav-bar-link'>
           <Link to="/">Home</Link>
            <Link to="/checkout">Cart</Link>
          </div>
            <div className='nav-auth'>
              {user ? (
                <div className='navbar-user'>
                  <span>{user.username}</span>  
                    <button className='btn btn-secondary' onClick={logout}>Logout</button>
                </div>
            ) : (
            <div className='nav-bar-auth'>
              <Link to="/auth" className='btn btn-primary'> 
                Login
              </Link>
              <Link to="/auth" className='btn btn-secondary'>
                Sign up
              </Link>
            </div>
              )}
          </div>
      </div>
    </nav>
  )
}

export default Navbar