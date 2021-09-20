import React from "react";

import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-col">
          <h4>Informacione</h4>
          <h5>Rreth Projektit</h5>
          <p>
            Developers(<small>Pas botimit te librit</small>)*
          </p>
        </div>
        <div className="footer-col">
          <h4>Aplikacionet</h4>
          <p>
            IOS(<small>Pas botimit te librit</small>)*
          </p>
          <p>
            Android(<small>Pas botimit te librit</small>)*
          </p>
        </div>
        <div className="footer-col">
          <h4>Kontakti</h4>
          <h5>forexample@ubt-uni.net</h5>
        </div>
        <div className="footer-col icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </footer>
    </>
  );
}
