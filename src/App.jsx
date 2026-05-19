import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Courses from './components/Courses'
import Youtube from './components/Youtube'
import InstaPage from './components/InstaPage'
import Review from './components/Review'
import ContactUs from './components/ContactUS'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Navbar />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/instagram' element={<InstaPage />} />
        <Route path='/reviews' element={<Review />} />
        <Route path='/contact' element={<ContactUs />} />
        <Footer />
      </Routes>
    </>
  )
}

export default App
