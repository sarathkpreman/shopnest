import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { useState, useRef, useEffect } from 'react'

const Navbar = () => {
  const { user, logout } = useAuth()
  const { cartItems } = useCart()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav className='nav-bar'>
      <div className='nav-bar-container'>

        <Link to="/" className='nav-logo' onClick={closeMenu}>ShopNest</Link>

        <button
          className='hamburger'
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}>

          <div className='nav-bar-link'>
            <Link to="/checkout" className='nav-cart-link' onClick={closeMenu}>
              🛒 Cart
              {cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}
            </Link>
          </div>

          <div className='nav-auth'>
            {user ? (
              <div className='navbar-user' ref={dropdownRef}>

                <div
                  className='user-avatar'
                  onClick={() => setDropdownOpen(prev => !prev)}
                >
                  {user.username.charAt(0).toUpperCase()}
                </div>

        
                {dropdownOpen && (
                  <div className='user-dropdown'>
                    <p className='dropdown-username'>{user.username}</p>
                    <hr className='dropdown-divider' />
                    <button
                      className='dropdown-logout'
                      onClick={() => { logout(); closeMenu() }}
                    >
                      Logout
                    </button>
                  </div>
                )}

              </div>
            ) : (
              <div className='nav-bar-auth'>
                <Link to="/auth" className='btn btn-primary' onClick={closeMenu}>Login</Link>
                <Link to="/auth" className='btn btn-secondary' onClick={closeMenu}>Sign up</Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar