import React from "react";
import { Icon } from "@iconify/react";

export default function Skills(props) {
  const { icon, name } = props;
  return (
    <li className="button list-item is-inline-flex mx-3">
      <span>
        <div className="skill-tile pl-0">
          <Icon icon={`logos:${icon}`} /> {name}
        </div>
      </span>
    </li>
  );
}
