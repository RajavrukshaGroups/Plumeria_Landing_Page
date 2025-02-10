import React from 'react'
import LandingPage from './components/experience'
import Navbar from './components/navbar'
import Footer from './components/footer'
import OngoingProjects from './components/our_ongoing_Projects'
// import Highlights from './components/highlights'

function App() {
  return (
    <>
    <div className='App'>
      <Navbar/>
      <LandingPage/>
      <OngoingProjects/>
      <Footer/>
      {/* <Highlights/> */}
    </div>
    </>
  )
}

export default App
