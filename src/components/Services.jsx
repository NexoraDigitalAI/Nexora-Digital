import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "AI Customer Assistants",
    text:
      "Answer customer questions, qualify leads, capture information, and help book appointments 24/7.",
    points: [
      "24/7 instant responses",
      "Lead qualification",
      "Appointment support",
    ],
  },
  {
    number: "02",
    title: "Lead Automation",
    text:
      "Automatically follow up with new prospects so fewer leads go cold and more opportunities turn into customers.",
    points: [
      "Instant lead follow-up",
      "Automated workflows",
      "Less manual work",
    ],
  },
  {
    number: "03",
    title: "High-Converting Websites",
    text:
      "Modern, fast websites designed to turn visitors into calls, bookings, leads, and paying customers.",
    points: [
      "Conversion-focused design",
      "Mobile responsive",
      "Built for growth",
    ],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="services-label">WHAT WE BUILD</span>

          <h2>
            Systems That Help Your Business
            <span> Work Smarter and Sell More.</span>
          </h2>

          <p>
            Nexora Digital combines AI, automation, and modern web design to
            help businesses capture more opportunities without adding more
            manual work.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
            >
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>

                <div className="service-icon">
                  {index === 0 && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M8 10h8" />
                      <path d="M8 14h5" />
                      <rect x="4" y="4" width="16" height="16" rx="4" />
                    </svg>
                  )}

                  {index === 1 && (
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

                  {index === 2 && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M7 7h.01" />
                      <path d="M10 7h.01" />
                    </svg>
                  )}
                </div>
              </div>

              <h3>{service.title}</h3>

              <p className="service-text">{service.text}</p>

              <div className="service-divider"></div>

              <ul className="service-points">
                {service.points.map((point) => (
                  <li key={point}>
                    <span className="point-check">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="service-link">
                Learn More
                <span>→</span>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="services-bottom-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span>Not sure what your business needs?</span>
            <h3>We'll help you find the right solution.</h3>
          </div>

          <a href="#contact">Book a Free Strategy Call</a>
        </motion.div>
      </div>
    </section>
  );
}