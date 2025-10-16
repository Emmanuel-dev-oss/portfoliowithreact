import { useState } from 'react'
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Portfolio from '../src/components/Portfolio';
import Services from '../src/components/Service';
import Experience from '../src/components/Experience';
import Contact from '../src/components/Contact'

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
