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
import BranchRajendra from './components/BranchRajendra'
import BranchJagdeo from './components/BranchJagdeo'
import AdmissionForm from './components/AdmissionForm'
import Blogs from './components/Blogs'
import BankingCoachingPatnaBlog from './components/Blogs/BestCoaching'
import Homeblog from './components/Homeblog'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/instagram' element={<InstaPage />} />
        <Route path='/reviews' element={<Review />} />
        <Route path='/contact' element={<ContactUs />} />

        <Route path='/branch/rajendra-nagar' element={<BranchRajendra />} />
        <Route path='/branch/jagdeo-path' element={<BranchJagdeo />} />
        <Route path='/admission' element={<AdmissionForm />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route
          path='/blog/best-banking-coaching-in-patna-bscacademy'
          element={<BankingCoachingPatnaBlog />}
        />
        <Route path='/homeblog' element={<Homeblog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

