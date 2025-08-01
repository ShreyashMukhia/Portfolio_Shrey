import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer" id="footer">
      <p className="copyright">
        <FaRegCopyright />
        2025 Shreyash Mukhia. All right reserved{" "}
      </p>
      <div>
        <p>Terms of service</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
    </div>
  );
}

export default Footer;
