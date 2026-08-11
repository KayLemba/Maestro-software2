import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="wrap footer-row">
        <p>© {new Date().getFullYear()} Tactivo Technologies. Lusaka, Zambia.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#maestro">Maestro</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
