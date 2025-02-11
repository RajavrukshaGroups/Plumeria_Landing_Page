import React from 'react'
import LandingPage from './components/experience'
import Navbar from './components/navbar'
import Footer from './components/footer'
import OngoingProjects from './components/our_ongoing_Projects'
import Highlights from './components/highlights'
import Amenities from './components/amenities';
import GetInTouch from './components/getInTouch'

function App() {
  return (
    <>
    <div className='App'>
      <Navbar/>
      <LandingPage/>
      <Highlights/> 
      <OngoingProjects/>
      <Amenities/>
      <GetInTouch/>
      <Footer/>
    </div>
    </>
  )
}

export default App
