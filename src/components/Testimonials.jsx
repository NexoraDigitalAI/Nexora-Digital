import { motion } from "framer-motion";

const reasons = [
  {
    title: "Built Around Your Business",
    text:
      "We focus on what actually makes sense for your workflow, customers, and goals instead of forcing you into a generic setup.",
  },
  {
    title: "Simple Process",
    text:
      "You do not need to understand complicated AI tools or automation software. We handle the technical side and keep the process clear.",
  },
  {
    title: "Focused on Real Outcomes",
    text:
      "The goal is not to add technology for the sake of it. Every system should help you save time, improve response speed, or create more opportunities.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-container">
        <motion.div
          className="testimonial-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonial-label">WHY WORK WITH NEXORA</span>

          <h2>
            Technology Should Make Business
            <span> Simpler — Not More Complicated.</span>
          </h2>

          <p>
            We build practical digital systems around your business so you can
            spend less time fighting technology and more time focusing on your
            customers.
          </p>
        </motion.div>

        <div className="testimonial-grid">
          {reasons.map((reason, index) => (
            <motion.article
              className="testimonial-card"
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
            >
              <div className="testimonial-icon">
                {index === 0 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5 20c0-4 3-7 7-7s7 3 7 7" />
                  </svg>
                )}

                {index === 1 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                )}

                {index === 2 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 17l5-5 4 4 7-8" />
                    <path d="M15 8h5v5" />
                  </svg>
                )}
              </div>

              <span className="testimonial-number">
                0{index + 1}
              </span>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="testimonial-future"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="future-left">
            <div className="future-stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <h3>Client results will live here.</h3>

            <p>
              As Nexora completes client projects, this section will showcase
              verified reviews, project outcomes, and real business results.
            </p>
          </div>

          <a href="#contact" className="testimonial-cta">
            Become an Early Client
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}