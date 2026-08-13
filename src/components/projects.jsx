function Projects() {
  return (
    <section className="projects section" id="projects">

      <div className="section-heading">
        <p className="section-label">03 — Selected work</p>

        <h2>
          Things I've <span>built.</span>
        </h2>
      </div>


      <div className="featured-project">

        <div className="project-preview">
          <div className="project-browser">

            <div className="browser-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="triply-preview">

              <div className="triply-nav">
                <strong>Triply</strong>

                <div>
                  <span>Explore</span>
                  <span>Trips</span>
                </div>
              </div>

              <div className="triply-content">
                <p>YOUR NEXT ADVENTURE</p>

                <h3>
                  Plan less.
                  <br />
                  Travel more.
                </h3>

                <div className="triply-button">
                  Start planning →
                </div>
              </div>

            </div>

          </div>
        </div>


        <div className="project-info">

          <div className="project-top">
            <span className="project-number">01</span>
            <span className="project-type">Featured project</span>
          </div>

          <h3>Triply</h3>

          <p className="project-description">
            A travel planning website designed to help travelers
            organize destinations, itineraries, activities, budgets,
            and travel information in one place.
          </p>

          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>APIs</span>
          </div>

          <div className="project-actions">
           <a href="https://ganga-giri.github.io/Triply-Travel-Planner/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link primary-project-link">
              Live demo ↗</a>

            <a href="https://github.com/ganga-giri/Triply-Travel-Planner"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link">
            GitHub ↗
              </a>
          </div>

        </div>

      </div>


      <div className="project-note">
        <span>✦</span>

        <p>
          More projects are currently being built.
          Check back soon.
        </p>
      </div>

    </section>
  )
}

export default Projects