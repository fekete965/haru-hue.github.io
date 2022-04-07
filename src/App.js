import React from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
// import Contact from "./components/Contact"
// import Projects from "./components/Projects"
import Resume from "./components/Resume";
import skill from "./components/skill"
import 'bulma/css/bulma.min.css';
import "./scss/App.scss"

export default function App () {
        const services = skill.map(item => {
            return <Skills key={item.id} icon={item.icon} name={item.name}/>
        })
    return (
        <> 
            <Navbar/>
            <div className="container-fluid">
                <Main />
                <About/>
                <section className="skills-section has-text-centered">
                    <h2>Skills</h2>
                    <ul className="list">
                    {services}
                    </ul>
                </section>
                {/* <Projects/> */}
                {/* <Resume/> */} 
                <Footer/>
            </div>
        </>
    )
}