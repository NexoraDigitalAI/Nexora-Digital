export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              Nexora<span>Digital</span>
            </a>

            <p>
              AI automation, modern websites, and digital systems built to help
              businesses capture more opportunities and save time.
            </p>

            <a href="#contact" className="footer-cta">
              Book a Free Strategy Call
              <span>→</span>
            </a>
          </div>

          <div className="footer-links-group">
            <h4>Explore</h4>

            <a href="#services">Services</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#portfolio">Our Work</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>

            <a href="#services">AI Customer Assistants</a>
            <a href="#services">Business Automation</a>
            <a href="#services">Website Design</a>
            <a href="#services">Lead Follow-Up Systems</a>
          </div>

          <div className="footer-links-group">
            <h4>Contact</h4>

            <a href="#contact">Start a Project</a>
            <a href="#contact">Request a Quote</a>
            <a href="#contact">Ask a Question</a>

            <span className="footer-status">
              <span className="footer-status-dot"></span>
              Accepting new projects
            </span>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Nexora Digital. All rights reserved.
          </p>

          <div className="footer-bottom-links">
  <a href="/privacy">Privacy Policy</a>
  <a href="/terms">Terms of Service</a>
</div>

          <a href="#" className="footer-back-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}