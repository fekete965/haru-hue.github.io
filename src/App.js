import React from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
// import Projects from "./components/Projects"
import Resume from "./components/Resume";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import skill from "./data/skill"
import resume from "./data/resume"
import 'bulma/css/bulma.min.css';
import "./scss/App.scss"
import { Icon } from "@iconify/react";
import Contact from "./components/Contact";

export default function App () {
        const services = skill.map(item => {
            return <Skills key={item.id} icon={item.icon} name={item.name}/>
        })
        const job = resume.map(item=> {
            return <Resume key={item.id} timeWorked = {item.time}
             position = {item.name} description = {item.describe} 
             location = {item.location}/>
        })
        const endresume  = (
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<Icon icon="entypo:suitcase" color="white"/>}/>
        )
    return (
        <> 
            <Navbar/>
                <Main />
                <About/>
                {/* <Projects/> */}
                <section className="container is-fluid has-text-centered">
                    <div className="section container">
                        <h2 className="title is-uppercase">Skills</h2>
                        <ul className="list">
                        {services}
                        </ul>
                    </div>
                </section>
                <section className="container is-fluid section resume-section">
                    <h2 className="title has-text-centered is-uppercase has-text-white">Experience</h2>
                    <VerticalTimeline>
                        {job}
                        {endresume}
                    </VerticalTimeline>
                </section>
                <Contact/>
                <Footer/>
        </>
    )
}