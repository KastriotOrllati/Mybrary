import React from "react";
import { Link } from "react-router-dom";
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
          <Link href="">Rreth Projektit</Link>
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
          <Link>forexample@ubt-uni.net</Link>
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
