import React from 'react'
import LandingPage from './components/experience'
import Navbar from './components/navbar'
import Footer from './components/footer'
import OngoingProjects from './components/our_ongoing_Projects'
import Highlights from './components/highlights'

function App() {
  return (
    <>
    <div className='App'>
      <Navbar/>
      <LandingPage/>
      <OngoingProjects/>
      <Highlights/>
      <Footer/>
    </div>
    </>
  )
}

export default App
