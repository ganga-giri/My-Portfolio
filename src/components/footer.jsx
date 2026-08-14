function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">

        <div className="footer-brand">
          <a href="about" className="footer-logo">
            Ganga.
          </a>

          <p>
            Frontend Developer building clean, responsive
            and user-friendly web experiences.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>

          <a href="https://github.com/ganga-giri" target="_blank">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/ganga-giri-58728b227/" target="_blank">
            LinkedIn
          </a>

          <a href="mailto:megangiri0527@email.com">
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Ganga Giri. All rights reserved.</p>
        <p>Built with React</p>
      </div>
    </footer>
  );
}

export default Footer;