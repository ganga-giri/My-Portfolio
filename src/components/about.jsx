function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <p className="section-label">01 — About me</p>
        <h2>A little bit about <span>me.</span></h2>
      </div>

      <div className="about-grid">
        <div className="about-intro">
          <p className="large-text">
            I'm a curious developer who enjoys turning ideas into
            thoughtful digital experiences.
          </p>

          <p>
            I'm currently building my skills in web development while
            exploring the world of cybersecurity. I enjoy learning by
            creating real projects, experimenting with new technologies,
            and solving problems along the way.
          </p>

          <p>
            My goal is to combine creativity, technology, and security
            to build things that are not only useful, but also safe
            and enjoyable to use.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">✦</div>

          <h3>Currently exploring</h3>

          <div className="exploring-list">
            <div>
              <span>01</span>
              <p>Frontend Development</p>
            </div>

            <div>
              <span>02</span>
              <p>JavaScript & React</p>
            </div>

            <div>
              <span>03</span>
              <p>Cybersecurity</p>
            </div>

            <div>
              <span>04</span>
              <p>Building real projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About