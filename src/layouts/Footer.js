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
              <a href="#">Contáctanos!</a>
            </div>
            <div className="rc">
              <a href="#">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="#">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="#">
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
