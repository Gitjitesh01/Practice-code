import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Jitesh from './App.jsx'
import Product from './Product.jsx'
import Demo from './Demo.jsx'
import User from './User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jitesh />
    {/* <Product /> */}
    <Demo />
    {/* <User /> */}
  </StrictMode>,
)

