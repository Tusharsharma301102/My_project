import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import CabBooking from './CabBooking/CabBooking.jsx'
import Contact from "./Contact/Contact.jsx"
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/cabBooking" element = {<CabBooking/>} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
