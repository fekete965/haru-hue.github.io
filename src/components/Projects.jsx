import React from "react";
import project from "../data/project";
import { Sections } from "../utils/constants";
import ProjectModal from "./ProjectModal";

export default function Projects({ projectRef }) {
  const modals = project.map(function (item, index) {
    return (
      <ProjectModal
        key={item.name}
        image={item.image}
        lang={item.lang}
        name={item.name}
        link={item.link}
        description={item.description}
      />
    );
  });

  return (
    <section
      id={Sections.Projects}
      className="section project-section"
      ref={projectRef}
    >
      <div className="container">
        <h2 className="title has-text-centered is-uppercase">Projects</h2>
        <div className="columns is-multiline">{modals}</div>
      </div>
    </section>
  );
}
