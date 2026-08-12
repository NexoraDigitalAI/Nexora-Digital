import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <a href="#" className="logo" onClick={closeMenu}>
          Nexora<span>Digital</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#how-it-works">How It Works</a>
          </li>

          <li>
            <a href="#portfolio">Work</a>
          </li>

          <li>
            <a href="#pricing">Pricing</a>
          </li>

          <li>
            <a href="#faq">FAQ</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="navbar-actions">
          <a href="#contact" className="nav-cta">
            Book a Call
          </a>

          <button
            className={`menu-button ${menuOpen ? "menu-button-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mobile-menu-inner">
              <a href="#services" onClick={closeMenu}>
                Services
                <span>→</span>
              </a>

              <a href="#how-it-works" onClick={closeMenu}>
                How It Works
                <span>→</span>
              </a>

              <a href="#portfolio" onClick={closeMenu}>
                Our Work
                <span>→</span>
              </a>

              <a href="#pricing" onClick={closeMenu}>
                Pricing
                <span>→</span>
              </a>

              <a href="#faq" onClick={closeMenu}>
                FAQ
                <span>→</span>
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="mobile-menu-cta"
                onClick={closeMenu}
              >
                Book a Free Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}