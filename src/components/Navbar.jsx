function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">Ganga<span>.</span></a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-button">
        Let's talk
      </a>
    </nav>
  )
}

export default Navbar