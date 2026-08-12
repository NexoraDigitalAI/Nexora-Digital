import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <section className="legal-section">
      <div className="legal-container">
        <span className="legal-label">LEGAL</span>

        <h1>Privacy Policy</h1>

        <p className="legal-updated">
          Last updated: August 12, 2026
        </p>

        <div className="legal-content">
          <h2>1. Information We Collect</h2>

          <p>
            When you contact Nexora Digital through our website, we may
            collect information you voluntarily provide, including your
            name, email address, phone number, business name, project
            interests, estimated budget, and message.
          </p>

          <h2>2. How We Use Your Information</h2>

          <p>
            We use the information you submit to respond to inquiries,
            discuss potential projects, provide requested services, and
            communicate with you about your request.
          </p>

          <h2>3. Form Submissions</h2>

          <p>
            Our website uses a third-party form processing service to
            receive and process contact form submissions. Information
            submitted through our forms may therefore be processed by
            that service on our behalf.
          </p>

          <h2>4. Information Sharing</h2>

          <p>
            We do not sell your personal information. Information may
            be shared with service providers when necessary to operate
            our website, communicate with you, or provide our services.
          </p>

          <h2>5. Data Security</h2>

          <p>
            We take reasonable measures to protect information submitted
            through our website. However, no internet transmission or
            electronic storage method can be guaranteed to be completely
            secure.
          </p>

          <h2>6. Your Choices</h2>

          <p>
            You may contact us to ask questions about personal
            information you have submitted or request that we delete
            information we maintain, subject to applicable legal
            requirements.
          </p>

          <h2>7. Third-Party Services</h2>

          <p>
            Nexora Digital may use third-party services to operate
            portions of the website, process contact requests, host the
            website, analyze website performance, or provide other
            business functionality. These providers may process
            information according to their own privacy policies.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time. Any
            changes will be reflected on this page with an updated
            revision date.
          </p>

          <h2>9. Contact Us</h2>

          <p>
            If you have questions about this Privacy Policy or the
            information you have submitted, please contact Nexora
            Digital through the contact form on our website.
          </p>
        </div>

        <Link to="/" className="legal-back">
          ← Back to Nexora Digital
        </Link>
      </div>
    </section>
  );
}