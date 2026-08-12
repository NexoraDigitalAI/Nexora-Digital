import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What exactly does Nexora Digital do?",
    answer:
      "Nexora Digital builds websites, AI customer assistants, and business automations designed to help businesses capture leads, respond faster, reduce repetitive work, and create a better customer experience.",
  },
  {
    question: "Do I need to understand AI or automation?",
    answer:
      "Not at all. We handle the technical side. You tell us how your business works and what you want to improve, and we recommend and build a solution around those needs.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on the size and complexity of the project. Our packages provide starting points, but we provide a clear quote after learning what your business actually needs.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "Timelines depend on the project. A smaller website or automation may be completed much faster than a custom system with multiple integrations. We'll provide an estimated timeline before the project begins.",
  },
  {
    question: "Can you build something specifically for my business?",
    answer:
      "Yes. Our goal is to build around your workflow instead of forcing your business into a generic template. Custom websites, AI assistants, automations, and integrations can all be discussed during your strategy call.",
  },
  {
    question: "What happens after my project launches?",
    answer:
      "We make sure your system is working correctly at launch and can discuss ongoing support, updates, maintenance, or additional automation depending on what your business needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <motion.div
          className="faq-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="faq-label">FAQ</span>

          <h2>
            Questions Before
            <span> Getting Started?</span>
          </h2>

          <p>
            Here are answers to some of the most common questions about
            working with Nexora Digital.
          </p>
        </motion.div>

        <div className="faq-layout">
          <motion.div
            className="faq-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="faq-left-label">
              STILL HAVE QUESTIONS?
            </span>

            <h3>
              Let's talk about what would actually make sense for your
              business.
            </h3>

            <p>
              Tell us what you're trying to improve and we'll help you figure
              out whether a website, AI assistant, automation, or combination
              of solutions makes the most sense.
            </p>

            <a href="#contact" className="faq-contact-button">
              Ask Us a Question
              <span>→</span>
            </a>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <span
                      className={`faq-plus ${
                        isOpen ? "faq-plus-open" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}