import React from "react";
import { Sections } from "../utils/constants";

export default function Navbar({ sectionInView }) {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <a href="/#" className="navbar-item is-uppercased">
            Joshua <span className="mt-4 dot">•</span>
          </a>
          <span
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <ul
            className={`navbar-menu navbar-end ${isActive ? "is-active" : ""}`}
          >
            <li
              className={`navbar-item ${
                sectionInView === "about" ? "navbar-item active" : ""
              }`}
            >
              <a href={`#${Sections.About}`}>About</a>
            </li>
            <li
              className={`navbar-item ${
                sectionInView === "skills" ? "navbar-item active" : ""
              }`}
            >
              <a href={`#${Sections.Skills}`}>Skills</a>
            </li>
            <li
              className={`navbar-item ${
                sectionInView === "projects" ? "navbar-item active" : ""
              }`}
            >
              <a href={`#${Sections.Projects}`}>Projects</a>
            </li>
            <li
              className={`navbar-item ${
                sectionInView === "resume" ? "navbar-item active" : ""
              }`}
            >
              <a href={`#${Sections.Resume}`}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
