import './index.css'
import Navbar from './managers/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './managers/Home'
import About from './managers/About'
import Services from './managers/Services'
import OurTeam from './managers/OurTeam'
import Projects from './managers/Projects'
import ContactUs from './managers/ContactUs'
import Footer from './managers/Footer'

function App() {
  return (
    <div className='w-screen overflow-x-hidden'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<OurTeam />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  <Footer />     
    </div>
  )
}

export default App
