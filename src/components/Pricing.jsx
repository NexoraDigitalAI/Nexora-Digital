import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    subtitle: "For businesses that need a strong digital foundation.",
    price: "$499",
    priceNote: "starting at",
    features: [
      "Professional landing page",
      "Mobile responsive design",
      "Lead capture form",
      "Basic AI chatbot setup",
      "Launch support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    subtitle: "For businesses ready to automate and capture more opportunities.",
    price: "$1,499",
    priceNote: "starting at",
    features: [
      "Everything in Starter",
      "Custom AI customer assistant",
      "Lead qualification system",
      "Automated follow-up workflows",
      "Appointment integration",
      "Advanced website sections",
    ],
    featured: true,
  },
  {
    name: "Custom",
    subtitle: "For businesses that need a more advanced system.",
    price: "Let's Talk",
    priceNote: "custom quote",
    features: [
      "Custom AI workflows",
      "CRM integrations",
      "Advanced automations",
      "Multi-step lead systems",
      "Custom development",
      "Priority implementation",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <motion.div
          className="pricing-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="pricing-label">PRICING</span>

          <h2>
            Simple Starting Points.
            <span> Built Around Your Business.</span>
          </h2>

          <p>
            Every business is different, so final pricing depends on the scope
            of your project. These packages give you a clear idea of where most
            projects begin.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.article
              className={`pricing-card ${
                plan.featured ? "pricing-card-featured" : ""
              }`}
              key={plan.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
            >
              {plan.featured && (
                <div className="pricing-popular">MOST POPULAR</div>
              )}

              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <p>{plan.subtitle}</p>
              </div>

              <div className="pricing-price-wrap">
                <span className="pricing-note">{plan.priceNote}</span>

                <div className="pricing-price">{plan.price}</div>
              </div>

              <div className="pricing-divider"></div>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="pricing-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={
                  plan.featured
                    ? "pricing-button pricing-button-primary"
                    : "pricing-button pricing-button-secondary"
                }
              >
                {plan.name === "Custom"
                  ? "Request a Quote"
                  : "Get Started"}

                <span>→</span>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="pricing-note-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="pricing-note-icon">?</div>

          <div>
            <h3>Not sure which option fits?</h3>
            <p>
              Tell us what you want to improve and we'll recommend the simplest
              solution that makes sense for your business.
            </p>
          </div>

          <a href="#contact">
            Talk to Nexora
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}