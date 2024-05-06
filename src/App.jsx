import React from 'react'
import Navbar from "./components/Navbar"
import VerticalNavbar from "./components/VerticalNavbar"
import SummaryButton from './components/SummaryButton'
import ThreeDObject from './components/ThreeDObject'
import Vertical3DBoxes from './components/Vertical3DBoxes'
import HealthSection from './components/HealthSection'

const App = () => {
  return (
    <>
    <div>
     <Navbar/>
     <VerticalNavbar/>
     
     <ThreeDObject/>
     <HealthSection/>
     <SummaryButton/>
     </div>
    </>
  )
}

export default App