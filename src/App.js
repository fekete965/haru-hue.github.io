import React, {useRef, useEffect} from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Resume from "./components/Resume";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import skill from "./data/skill"
import resume from "./data/resume"
import 'bulma/css/bulma.min.css';
import "./scss/App.scss"
import { Icon } from "@iconify/react";
import { nanoid } from "nanoid";
import AOS from "aos";
import "aos/dist/aos.css";

const Sections = {
    About: "about",
    Skills: "skills",
    Projects: "projects",
    Resume: "resume",
  };
  
const useNavObserver = (section, setSectionInView, observerOptions) => {
   const elementRef = useRef(null);
    const aboutElRef = React.useCallback(
      (node) => {
        if (elementRef.current) elementRef.current.disconnect();
  
        elementRef.current = new IntersectionObserver(
          (entries, observerOptions) => {
            if (!entries[0]?.isIntersecting) {
              setSectionInView(null);
            } else {
              setSectionInView(section);
            }
          },
          observerOptions
        );
        if (node) {
          elementRef.current.observe(node);
        }
      },
      [section, observerOptions, setSectionInView]
    );
  
    return aboutElRef;
  };
  
  export default function App() {
        const [sectionInView, setSectionInView] = React.useState(null);
      
        const aboutRef = useNavObserver(Sections.About, setSectionInView, {
          threshold: 0.5,
        });
        const skillRef = useNavObserver(Sections.Skills, setSectionInView, {
          threshold: 0.5,
        });
        const projectRef = useNavObserver(Sections.Projects, setSectionInView, {
          threshold: 0.5,
        });
        const resumeRef = useNavObserver(Sections.Resume, setSectionInView, {
          threshold: 0.5,
        });

        const services = skill.map(item => {
            return <Skills key={nanoid()} icon={item.icon} name={item.name}/>
        })
        const job = resume.map(item=> {
            return <Resume key={nanoid()} timeWorked = {item.time}
             position = {item.name} description = {item.describe} 
             location = {item.location}/>
        })
        const endresume  = (
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<Icon icon="entypo:suitcase" color="white"/>}/>
        )

        useEffect(() => {
          AOS.init()
          AOS.refresh();
        }, []);

    return (
        <> 
            <Navbar sectionInView={sectionInView}/>
              <div data-aos="fade-down">
                <Main/>
                <About aboutRef={aboutRef}/>
              </div>
                <section className="container skills-section is-fluid has-text-centered" 
                id="skills" ref={skillRef} data-aos="fade-down">
                    <div className="section container">
                        <h2 className="title has-text-white is-uppercase">Skills</h2>
                        <ul className="list">
                        {services}
                        </ul>
                    </div>
                </section>
                <div data-aos="fade-down">
                  <Projects id="projects" projectRef={projectRef}/>
                </div>
                <section className="container is-fluid section resume-section" id="resume" ref={resumeRef}>
                    <h2 className="title has-text-centered is-uppercase has-text-white">Experience</h2>
                    <VerticalTimeline>
                        {job}
                        {endresume}
                    </VerticalTimeline>
                </section>
                <div data-aos="fade-down">
                  <Footer/>
                </div>
        </>
    )
}