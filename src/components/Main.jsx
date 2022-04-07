import React from "react"
import image from "../images/black-boy.png"

export default function Main () {
    return (
        <main className="container">
            <div className = "columns is-centered is-mobile">
                <div className="column info">
                    <h4>Hello, This is Joshua!</h4>
                    <h1>I am a</h1>
                    <h1>Web Designer</h1>
                    <button className="button is-primary is-large">
                        Download CV
                    </button>
                    <button className="button is-large">
                        Hire Me
                    </button>
                </div>
                <div className="column">
                    <img src={image}/>
                </div>
            </div>
            <div className="number-counter columns has-text-centered">
                <div className="count column" data-number="15"> Projects completed</div>
                <div className="count column" data-number="5">Cups of Coffee</div>
                <div className="count column" data-number="10">Happy Clients</div>
                <div className="count column" data-number="3">Years Experienced</div>
            </div>
        </main>
    )
}