import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Service';
import Experience from './components/Experience';
import Contact from './components/Contact'

function App() {
  return (
     <div className="App">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
