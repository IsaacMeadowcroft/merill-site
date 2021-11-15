import React from "react";
import "../css/Footer.css";

function Footer(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <h6>Contact Me</h6>
            <p className="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Prints">Prints</a>
              </li>
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
