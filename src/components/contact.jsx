function Contact() {
  return (
    <section className="contact section" id="contact">

      <div className="section-heading">
        <p className="section-label">05 — Let's connect</p>
      </div>

      <div className="contact-wrapper">

        <div>
          <h2 className="contact-title">
            Let's build
            <br />
            something <span>good.</span>
          </h2>

          <p className="contact-description">
            Have a project, opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>


        <div className="contact-links">

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=megangiri0527@gmail.com"
          target="_blank"
         rel="noreferrer"
         className="contact-link">
  <span>Email me</span>
  <span>↗</span>
</a>

          <a
            href="https://github.com/ganga-giri"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ganga-giri-58728b227/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact