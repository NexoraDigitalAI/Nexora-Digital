import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    text:
      "We learn how your business works, where your leads come from, what slows you down, and where automation can make the biggest impact.",
  },
  {
    number: "02",
    title: "We Build Your System",
    text:
      "We design and build the website, AI assistant, or automation around your workflow so it fits your business instead of forcing you into a template.",
  },
  {
    number: "03",
    title: "Launch & Grow",
    text:
      "We test everything, launch your system, and help you improve it over time so it keeps supporting your business as you grow.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">
        <motion.div
          className="how-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="how-label">HOW IT WORKS</span>

          <h2>
            From Idea to Launch
            <span> Without the Complexity.</span>
          </h2>

          <p>
            We keep the process simple. You tell us what your business needs,
            and we handle the technical side from strategy to launch.
          </p>
        </motion.div>

        <div className="how-grid">
          {steps.map((step, index) => (
            <motion.div
              className="how-step"
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
            >
              <div className="how-step-number">{step.number}</div>

              <div className="how-step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              {index !== steps.length - 1 && (
                <div className="how-connector">
                  <span></span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="how-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="how-bottom-copy">
            <span>READY TO GET STARTED?</span>
            <h3>Let's build a system that works for your business.</h3>
          </div>

          <a href="#contact" className="how-cta">
            Book a Free Strategy Call
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}