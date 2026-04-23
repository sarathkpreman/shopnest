
import './App.css'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth.jsx'
import Checkout from './pages/Checkout.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
      <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/auth" element={<Auth />} />
       <Route path="/checkout" element={<Checkout />} />
     </Routes>
    </>
  )
}

export default App
