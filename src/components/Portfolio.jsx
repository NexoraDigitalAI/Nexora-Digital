import { motion } from "framer-motion";

const projects = [
  {
    tag: "AI AUTOMATION",
    title: "AI Customer Assistant",
    description:
      "A smart website assistant designed to answer questions instantly, qualify leads, and help customers take the next step.",
    stats: ["24/7 responses", "Lead capture", "Instant support"],
    previewClass: "project-preview-one",
  },
  {
    tag: "WEB DESIGN",
    title: "Conversion-Focused Website",
    description:
      "A modern business website built around clear messaging, strong calls to action, and a smoother path from visitor to customer.",
    stats: ["Mobile-first", "Fast loading", "Built to convert"],
    previewClass: "project-preview-two",
  },
  {
    tag: "LEAD AUTOMATION",
    title: "Automated Follow-Up System",
    description:
      "A workflow designed to respond to new leads quickly, organize inquiries, and reduce the chance of opportunities going cold.",
    stats: ["Faster follow-up", "Less manual work", "Simple workflows"],
    previewClass: "project-preview-three",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <motion.div
          className="portfolio-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="portfolio-label">OUR WORK</span>

          <h2>
            See What Nexora
            <span> Can Build for Your Business.</span>
          </h2>

          <p>
            Explore examples of the kinds of systems we design to help
            businesses improve customer experience, automate repetitive work,
            and turn more visitors into leads.
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
            >
              <div className={`project-preview ${project.previewClass}`}>
                {index === 0 && (
                  <div className="chat-preview">
                    <div className="preview-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="preview-message preview-message-user">
                      Do you have any openings tomorrow?
                    </div>

                    <div className="preview-message preview-message-ai">
                      Yes! I can help you find an available time and collect
                      your information.
                    </div>

                    <div className="preview-success">
                      <span>✓</span>
                      New lead captured
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="website-preview">
                    <div className="preview-browser">
                      <div className="preview-browser-top">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="fake-nav"></div>

                      <div className="fake-hero-title"></div>
                      <div className="fake-hero-title small"></div>

                      <div className="fake-copy"></div>
                      <div className="fake-copy short"></div>

                      <div className="fake-button"></div>

                      <div className="fake-cards">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="automation-preview">
                    <div className="flow-box">
                      New Lead
                    </div>

                    <div className="flow-line"></div>

                    <div className="flow-box">
                      AI Follow-Up
                    </div>

                    <div className="flow-line"></div>

                    <div className="flow-box active">
                      Appointment Ready
                    </div>
                  </div>
                )}
              </div>

              <div className="project-content">
                <span className="project-tag">{project.tag}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-features">
                  {project.stats.map((stat) => (
                    <span key={stat}>✓ {stat}</span>
                  ))}
                </div>

                <a href="#contact" className="project-link">
                  Build Something Like This
                  <span>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="portfolio-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>EXAMPLE SOLUTIONS</span>
          <p>
            These concepts demonstrate the types of systems Nexora Digital can
            build. Client case studies will be added as completed projects
            become available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}