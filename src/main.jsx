import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './pages/Footer.jsx'
import Navbar from './pages/Navbar.jsx'
import Forms from './pages/Forms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Footer />
  </StrictMode>,
)
