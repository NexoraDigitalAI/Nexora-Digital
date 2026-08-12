import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <section className="legal-section">
      <div className="legal-container">
        <span className="legal-label">LEGAL</span>

        <h1>Terms of Service</h1>

        <p className="legal-updated">
          Last updated: August 12, 2026
        </p>

        <div className="legal-content">
          <h2>1. Website Use</h2>

          <p>
            This website provides information about Nexora Digital and
            the services we offer. By using this website, you agree to
            use it only for lawful purposes.
          </p>

          <h2>2. Our Services</h2>

          <p>
            Nexora Digital may provide website development, AI
            automation, AI customer assistants, lead generation
            systems, business automation, and related digital services.
          </p>

          <h2>3. Project Agreements</h2>

          <p>
            Specific project pricing, deliverables, timelines, payment
            terms, revisions, ownership rights, and responsibilities
            will be established separately before paid project work
            begins.
          </p>

          <h2>4. Quotes and Pricing</h2>

          <p>
            Prices, packages, or examples displayed on this website are
            provided for general informational purposes and may not
            represent a final project quote. Final pricing may vary
            depending on the requirements and scope of a project.
          </p>

          <h2>5. Payments</h2>

          <p>
            Payment requirements for individual projects will be
            provided before work begins. Additional work outside the
            agreed project scope may require additional fees.
          </p>

          <h2>6. Intellectual Property</h2>

          <p>
            Content, branding, graphics, designs, and other materials
            belonging to Nexora Digital may not be copied, reproduced,
            or distributed without permission except where permitted
            by law.
          </p>

          <h2>7. Third-Party Services</h2>

          <p>
            Some Nexora Digital services may rely on third-party
            platforms, APIs, hosting providers, artificial intelligence
            services, software providers, or other technologies.
            Availability and performance of these third-party services
            may be outside our control.
          </p>

          <h2>8. No Guaranteed Results</h2>

          <p>
            Our services are designed to help businesses improve their
            digital operations, customer experience, automation, and
            online presence. However, Nexora Digital does not guarantee
            specific revenue, sales, leads, rankings, or other business
            results.
          </p>

          <h2>9. Limitation of Liability</h2>

          <p>
            To the extent permitted by applicable law, Nexora Digital
            will not be responsible for indirect, incidental, or
            consequential losses resulting from the use of this website
            or our services.
          </p>

          <h2>10. Changes to These Terms</h2>

          <p>
            We may update these Terms from time to time. Changes will be
            reflected on this page with an updated revision date.
          </p>

          <h2>11. Contact Us</h2>

          <p>
            If you have questions about these Terms, please contact
            Nexora Digital through the contact form on our website.
          </p>
        </div>

        <Link to="/" className="legal-back">
          ← Back to Nexora Digital
        </Link>
      </div>
    </section>
  );
}