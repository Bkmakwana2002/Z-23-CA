import React from "react";
import "./footer-style.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="myfooter">
          <div className="myrow">
            <a href="https://www.facebook.com/zeitgeist.iitrpr/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/zeitgeist_iitrpr/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://in.linkedin.com/in/zeitgeist-iit-ropar-aa2bb6166">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/zeitgeist_rpr">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="myrow">
            Copyright © 2023 Zeitgeist - Made in collaboration with &nbsp;{" "}
            <a href="https://webguruz.in/" target={"_blank"}>
              WebGuruz
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
