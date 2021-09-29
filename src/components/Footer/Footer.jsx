import React from "react";
import './Footer.css';

const ch1 = ">>>>";
const ch2 = "<<<<";
const Footer = () => {
  return (
    <div className="footer-container">
      <a
        href="https://github.com/Shubham-Sati?tab=repositories"
        className="footer-link"
        target="blank"
        rel="noreferrer"
        style={{textDecoration:"none"}}
      >
        {ch1}  GITHUB PAGE {ch2}
      </a>
    </div>
  );
};

export default Footer;
