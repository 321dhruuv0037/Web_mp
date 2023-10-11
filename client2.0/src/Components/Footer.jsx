import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-first">
          <h1>VeBook</h1>
          <div className="footer-links">
            <Link className="nav-link" aria-current="page" to="/aboutus">
              About Us
            </Link>

            <a href="https://github.com/321dhruuv0037/Web_mp">
              View source code
            </a>

            <Link className="nav-link" to="/contactus">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        Copyright &#169; www.vebook.com | All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
