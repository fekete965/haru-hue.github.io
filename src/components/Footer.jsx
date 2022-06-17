import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer has-text-centered pb-0">
      <div className="footer-icons">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <p>
        Made with <FontAwesomeIcon icon={faHeart} /> by Joshua{" "}
        <small>(&copy; Copyright 2022)</small>
      </p>
      <small>Made with</small> Bulma
    </footer>
  );
}
