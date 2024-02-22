import React from "react";
import "./Footer.css";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import whats from "../assets/whats.png";

function Footer() {
  return (
    <div className="Footer" style={{ position: "absolute", bottom: 0 }}>
      <div className="sb_footer">
        <div className="links">
          <div className="socialmedia1">
            <div className="lc">
              <a href="https://www.waru.com.mx/">Contáctanos!</a>
            </div>
            <div className="rc">
              <a href="https://www.facebook.com/">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="https://www.whatsapp.com/">
                <img src={whats} alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
