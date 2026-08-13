function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="eyebrow">
          ✦ Welcome to my little corner of the internet
        </p>

        <h1>
          Hi, I'm <span>Ganga</span>.
          <br />
          I build things & explore security.
        </h1>

        <p className="hero-description">
          I'm a cybersecurity enthusiast and web developer who enjoys
          creating thoughtful digital experiences and learning how
          technology can be made safer.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore my work <span>↗</span>
          </a>

          <a href="#contact" className="secondary-button">
            Say hello
          </a>
        </div>

      </div>

      <div className="hero-decoration">
        <div className="floating-card card-one">
          <span>✦</span>
          <p>Build</p>
        </div>

        <div className="floating-card card-two">
          <span>⌘</span>
          <p>Learn</p>
        </div>

        <div className="floating-card card-three">
          <span>♡</span>
          <p>Create</p>
        </div>

        <div className="hero-circle">
          <span>G</span>
        </div>
      </div>

    </section>
  )
}

export default Hero