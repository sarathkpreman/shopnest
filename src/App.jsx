
import './App.css'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth.jsx'
import Checkout from './pages/Checkout.jsx'
import Navbar from './components/Navbar.jsx'
import AuthProvider from './context/AuthContext.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/products/:id' element={<ProductDetails/>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
