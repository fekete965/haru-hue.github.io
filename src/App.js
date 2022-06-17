import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import skill from "./data/skill";
import resume from "./data/resume";
import "bulma/css/bulma.min.css";
import "./scss/App.scss";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavObserver } from "./utils/hooks";
import { Sections } from "./utils/constants";

export default function App() {
  const [sectionInView, setSectionInView] = React.useState(null);

  const aboutRef = useNavObserver(Sections.About, setSectionInView, {
    threshold: 0.9,
  });
  const skillRef = useNavObserver(Sections.Skills, setSectionInView, {
    threshold: 0.8,
  });
  const projectRef = useNavObserver(Sections.Projects, setSectionInView, {
    threshold: 0.4,
  });
  const resumeRef = useNavObserver(Sections.Resume, setSectionInView, {
    threshold: 0.5,
  });

  const services = skill.map((item) => {
    return <Skills key={item.name} icon={item.icon} name={item.name} />;
  });
  const job = resume.map((item) => {
    return (
      <Resume
        key={item.name}
        timeWorked={item.time}
        position={item.name}
        description={item.describe}
        location={item.location}
      />
    );
  });
  const endresume = (
    <VerticalTimelineElement
      iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      icon={<Icon icon="entypo:suitcase" color="white" />}
    />
  );

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar sectionInView={sectionInView} />
      <div data-aos="fade-down" data-aos-once>
        <Main />
        <About aboutRef={aboutRef} />
      </div>
      <section
        className="container skills-section is-fluid has-text-centered"
        id={Sections.Skills}
        ref={skillRef}
        data-aos="fade-down"
        data-aos-once
      >
        <div className="section container">
          <h2 className="title has-text-white is-uppercase">Skills</h2>
          <ul className="list">{services}</ul>
        </div>
      </section>
      <div data-aos="fade-down" data-aos-once>
        <Projects projectRef={projectRef} />
      </div>
      <section
        className="container is-fluid section resume-section"
        id={Sections.Resume}
        ref={resumeRef}
      >
        <h2 className="title has-text-centered is-uppercase has-text-white">
          Experience
        </h2>
        <VerticalTimeline>
          {job}
          {endresume}
        </VerticalTimeline>
      </section>
      <div data-aos="fade-down" data-aos-once>
        <Footer />
      </div>
    </>
  );
}
