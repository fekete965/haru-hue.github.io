import { Icon } from "@iconify/react";
import React from "react";

export default function ProjectModal(props) {
  const { image, name, lang, description, link, id } = props;
  const langs = lang.map((oldLang) => {
    return <Icon icon={`logos:${oldLang}`} />;
  });
  return (
    <div className="column is-4" id={id}>
      <div className="card">
        <div className="card-image">
          {image && (
            <figure className="image">
              <img src={require(`../images/${image}`)} alt={name} />
            </figure>
          )}
        </div>
        <div className="card-content">
          <article>
            <div className="is-size-4 mb-5">
              {name}
              <br />
              {langs}
            </div>
            {description}
          </article>
          <div className="mt-2">
            <a href={link} rel="noreferrer" target="_blank">
              <button className="button">Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
