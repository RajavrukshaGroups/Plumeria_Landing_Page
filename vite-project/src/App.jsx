import React from 'react';
import LandingPage from './components/experience';
import Navbar from './components/navbar';
import Footer from './components/footer';
import OngoingProjects from './components/our_ongoing_Projects';
import Highlights from './components/highlights';
import Amenities from './components/amenities';
import GetInTouch from './components/getInTouch';
// import Location from './components/location';
import PageTitle from './components/pageTitle';
import PlumeriaOverview from './components/plumeria_Overview';
import  {InfiniteMovingCardsDemo}  from './components/PlumeriaInfiniteGallary';
import '../src/components/styles/pagetitle.css'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
    <div className='App'>
      <Navbar/>
      <PageTitle/>
      <LandingPage/>
      <PlumeriaOverview/>
      <Highlights/> 
      <div className='new-gal-plumeria'>
      <InfiniteMovingCardsDemo/>
      </div>
      {/* <OngoingProjects/> */}
      <Amenities/>
      <GetInTouch/>
      <div className="toast-wrapper">
                <ToastContainer/>
            </div>
      {/* <Location/> */}
      <Footer/>
    </div>
    </>
  )
}

export default App
