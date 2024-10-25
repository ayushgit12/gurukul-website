import { useState } from 'react'

import './index.css'
import Navbar from './managers/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './managers/Home'
import AboutUs from './managers/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
     
    </>
  )
}

export default App
