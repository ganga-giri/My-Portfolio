import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Journey from './components/Journey'
import Contact from './components/contact'
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App