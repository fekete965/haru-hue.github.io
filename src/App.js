import React from "react";
import Navbar from "./components/Navbar"
// import About from "./components/About";
import Footer from "./components/Footer";
// import Contact from "./components/Contact"
// import Projects from "./components/Projects"
import "./scss/App.scss"

export default function App () {
    // const journal = data.map(item => {
    //     return <Country key = {item.id} item = {item}/>
    // })
    return (
        <> 
            <Navbar/>
            
            <Footer/>
        </>
    )
}