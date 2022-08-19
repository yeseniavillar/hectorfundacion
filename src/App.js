import React, { Fragment } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

function App () {
  return (
    <div >
      <Fragment>
      <Navbar/>
      <Hero />
      <About/>
      <Footer/>
      </Fragment>
    </div>
  )
}
export default App
