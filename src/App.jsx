import './App.css'
import { Route, Routes } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>404 - Page Not Found</h1>
      <p style={{ marginTop: 12, color: '#555' }}>
        The page you are looking for does not exist.
      </p>
    </div>
  )
}

import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Youtube from './components/Youtube';
import InstaPage from './components/InstaPage';
import Review from './components/Review';
import ContactUs from './components/ContactUS';
import Footer from './components/Footer';
import BranchRajendra from './components/BranchRajendra';
import BranchJagdeo from './components/BranchJagdeo';
import AdmissionForm from './components/AdmissionForm';
import Blogs from './components/Blogs';
import BankingCoachingPatnaBlog from './components/Blogs/BestCoaching';
import Homeblog from './components/Homeblog';
import SbiBanking from './components/Blogs/SbiBanking';
import Bestjag from './components/Blogs/Bestjag';
import WhyBsc from './components/Blogs/WhyBsc';
import Consist from './components/Blogs/consist';
import Banking from './components/Blogs/Banking';
import Guidance from './components/Blogs/Guidance';
import Boringroad from './components/Boringroad';
import Crack from './components/Blogs/Crack';
import Ibps from './components/Blogs/Ibps';
import Perfect from './components/Blogs/Perfect';
import Sscprep from './components/Blogs/Sscprep';

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
        <Route path ='/branch/boring-road' element ={<Boringroad/>}/>
        <Route path='/blogs' element={<Blogs />} />
        <Route
          path='/blog/best-banking-coaching-in-patna-bscacademy'
          element={<BankingCoachingPatnaBlog />}
        />
        <Route path='/homeblog' element={<Homeblog />} />
        <Route path='/blog/sbi-apprentice-recruitment-2026' element={<SbiBanking />} />
        <Route path='/blog/best-banking-coaching-in-saguna-more-patna' element={<Bestjag />} />
        <Route path='/blog/from-preparation-to-selection' element={<WhyBsc/>} />
        <Route path='/blog/the-real secret-to-success-in-banking-exams-consistency' element={<Consist/>} />
        <Route path='/blog/bsc-academy-patna-guide-2026' element={<Banking />} />
        <Route path ='/blog/bsc-academy-patna-discipline-guidance' element ={<Guidance/>}/>
        <Route path ='/blog/why-bsc-academy-patna-best-choice-for-government-job-2026' element = {<Crack/>}/>
        <Route path ='/blog/ibps-po-2026-notification-out-ibps-po-salary-2026' element = {<Ibps/>}/>
        <Route path ='/blog/bank-ssc-railway-exams-2026-complete-guide' element = {<Perfect/>}/>
        <Route path ='/blog/ssc-cgl-2026-preparation-strategy' element = {<Sscprep/>}/>
        
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App

