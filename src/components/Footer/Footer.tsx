import React from "react";
import "./Footer.scss";

import FooterSvg from "../../assets/footer/footer.svg";

const Footer = () => {
  return (
    <footer>
      <img className="footer-svg" src={FooterSvg} alt="Footer" />
    </footer>
  );
};

export default Footer;
