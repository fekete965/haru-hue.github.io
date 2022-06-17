import { Icon } from "@iconify/react";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Resume(props) {
  const { timeWorked, position, description, location } = props;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={`${timeWorked}`}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#5D7A8B" }}
      icon={<Icon icon="entypo:suitcase" color="white" />}
    >
      <h3 className="vertical-timeline-element-title">{position}</h3>
      <h4 className="vertical-timeline-element-subtitle">{location}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
}
