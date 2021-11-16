import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer(props) {
  return (
    <>
      <div className="row justify-content-left ml-4" style={{ padding: 10 }}>
        <span>
          <h5 style={{ color: "yellow", fontSize: "10" }}>Follow Us </h5>
        </span>
        <div>
          <a
            className="btn btn-social-icon btn-instagram"
            href="http://instagram.com/"
          >
            <i className="fa fa-instagram" />
          </a>{" "}
          <a
            class="btn btn-social-icon btn-facebook"
            href="http://facebook.com/"
          >
            <i className="fa fa-facebook" />
          </a>{" "}
          <a
            className="btn btn-social-icon btn-twitter"
            href="http://twitter.com/"
          >
            <i className="fa fa-twitter" />
          </a>{" "}
          <a
            className="btn btn-social-icon btn-google"
            href="http://youtube.com/"
          >
            <i className="fa fa-youtube" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
