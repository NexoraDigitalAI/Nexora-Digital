import { useState } from "react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwleoygp";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);

        setError(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        "Unable to send your request right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-label">LET&apos;S TALK</span>

          <h2>
            Ready to Build Something
            <span> Better for Your Business?</span>
          </h2>

          <p>
            Tell us a little about your business and what you&apos;re trying to
            improve. We&apos;ll help you figure out the right next step.
          </p>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="contact-info-label">
              START A CONVERSATION
            </span>

            <h3>
              Let&apos;s find the simplest way to improve your workflow.
            </h3>

            <p>
              Whether you need a better website, faster lead follow-up,
              an AI assistant, or a custom automation, we&apos;ll start by
              understanding the problem before recommending anything.
            </p>

            <div className="contact-benefits">
              <div className="contact-benefit">
                <span>✓</span>

                <div>
                  <h4>No-obligation conversation</h4>
                  <p>
                    See if Nexora is a good fit before committing.
                  </p>
                </div>
              </div>

              <div className="contact-benefit">
                <span>✓</span>

                <div>
                  <h4>Clear recommendations</h4>
                  <p>
                    We&apos;ll focus on what actually makes sense for you.
                  </p>
                </div>
              </div>

              <div className="contact-benefit">
                <span>✓</span>

                <div>
                  <h4>Custom project scope</h4>
                  <p>
                    Your solution is built around your business needs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!submitted ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="business">
                      Business Name
                    </label>

                    <input
                      id="business"
                      name="business"
                      type="text"
                      placeholder="Your Business"
                      autoComplete="organization"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@business.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Optional"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">
                    What are you interested in?
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="AI Customer Assistant">
                      AI Customer Assistant
                    </option>

                    <option value="Business Automation">
                      Business Automation
                    </option>

                    <option value="Website Design">
                      Website Design
                    </option>

                    <option value="Website + Automation">
                      Website + Automation
                    </option>

                    <option value="Not Sure Yet">
                      I&apos;m Not Sure Yet
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a range
                    </option>

                    <option value="Under $500">
                      Under $500
                    </option>

                    <option value="$500 - $1,500">
                      $500 – $1,500
                    </option>

                    <option value="$1,500 - $3,000">
                      $1,500 – $3,000
                    </option>

                    <option value="$3,000+">
                      $3,000+
                    </option>

                    <option value="Not Sure Yet">
                      Not Sure Yet
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Tell us about your business
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="What does your business do, and what would you like to improve?"
                    required
                  ></textarea>
                </div>

                <input
                  type="text"
                  name="_gotcha"
                  tabIndex="-1"
                  autoComplete="off"
                  style={{ display: "none" }}
                />

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Request Your Free Strategy Call
                      <span>→</span>
                    </>
                  )}
                </button>

                {error && (
                  <p className="contact-error">
                    {error}
                  </p>
                )}

                <p className="contact-form-note">
                  No spam. No pressure. Just a conversation about your
                  business.
                </p>
              </form>
            ) : (
              <div className="contact-success">
                <div className="contact-success-icon">
                  ✓
                </div>

                <span>REQUEST RECEIVED</span>

                <h3>Thanks for reaching out.</h3>

                <p>
                  Your request has been sent successfully. We&apos;ll review
                  your information and get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}