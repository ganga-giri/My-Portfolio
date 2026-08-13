import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Journey from './components/Journey'
import Contact from './components/contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <projects />
        <Journey />
        <Contact />
      </main>
    </>
  )
}

export default App