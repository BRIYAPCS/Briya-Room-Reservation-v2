import "../css/footer.css";

/*
  ======================================================
  Footer Component
  ------------------------------------------------------
  - Displays copyright year dynamically
  - Includes hover highlight animation
  - Fully responsive
  ======================================================
*/

function Footer() {

  // Dynamically calculate current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* Animated text wrapper */}
      <span className="footer-text">
        © {currentYear} | Designed &amp; Engineered by the Briya IT Team | All Rights Reserved.
      </span>

    </footer>
  );
}

export default Footer;