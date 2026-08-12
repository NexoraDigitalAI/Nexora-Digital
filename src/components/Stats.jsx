import { motion } from "framer-motion";

const stats = [
  {
    title: "Built for Small Businesses",
    text: "Practical AI systems designed around real business needs.",
  },
  {
    title: "24/7 Automation",
    text: "Help customers and capture leads even when you're offline.",
  },
  {
    title: "Custom Solutions",
    text: "No cookie-cutter setup. Every system is tailored to the business.",
  },
  {
    title: "Focused on Growth",
    text: "Everything is designed to save time, improve follow-up, and create more opportunities.",
  },
];

export default function Stats() {
  return (
    <section className="trust-section">
      <div className="trust-container">
        <motion.div
          className="trust-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="trust-label">WHY NEXORA</span>

          <h2>
            Built to Make Your Business
            <span> Easier to Run and Easier to Grow.</span>
          </h2>

          <p>
            We focus on useful systems that solve real problems — faster
            responses, better lead handling, less repetitive work, and a
            stronger online presence.
          </p>
        </motion.div>

        <div className="trust-grid">
          {stats.map((item, index) => (
            <motion.div
              className="trust-card"
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="trust-icon">
                {index === 0 && "01"}
                {index === 1 && "02"}
                {index === 2 && "03"}
                {index === 3 && "04"}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}