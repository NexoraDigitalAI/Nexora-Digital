import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-badge">
          AI Automation for Modern Businesses
        </div>

        <h1>
          Turn More Leads Into
          <span> Customers — Automatically.</span>
        </h1>

        <p className="hero-description">
          Nexora Digital builds AI systems, modern websites, and business
          automations that help you capture leads, respond instantly, and save
          hours of manual work.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Book a Free Strategy Call
          </a>

          <a href="#portfolio" className="btn-secondary">
            See Our Work
          </a>
        </div>

        <div className="hero-trust">
          <span>✓ Custom Solutions</span>
          <span>✓ 24/7 Automation</span>
          <span>✓ Built for Growth</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-demo"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="demo-top">
          <div className="demo-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p>AI Customer Assistant</p>
        </div>

        <div className="chat-area">
          <div className="message customer-message">
            Do you have availability tomorrow?
          </div>

          <div className="message ai-message">
            Yes! We currently have openings at 10:30 AM, 1:00 PM, and 3:30 PM.
            Would you like me to book one?
          </div>

          <div className="lead-card">
            <div>
              <p className="lead-label">New Lead Captured</p>
              <h3>Appointment Request</h3>
            </div>

            <div className="lead-check">✓</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}