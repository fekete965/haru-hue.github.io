import React from "react"
import Typewriter from 'typewriter-effect';
import image from "../images/black-boy.png"

export default function Main () {
    const typetext = <Typewriter
    options={{
      strings: ['Web Designer', 'Graphics Designer',
                'UI/UX Designer', 'Front-end Developer',
                'Student', 'Web Developer'],
      autoStart: true,
      loop: true,
    }}
  />
    return (
        <main className="is-fluid">
            <div className="container">
                <div className = "columns">
                    <div className="column info">
                        <div className="hero">
                            <div className="hero-body">
                                <h2 className="subtitle">Hello, This is Joshua!</h2>
                                <h1 className="title">I am a</h1>
                                <h1 className="title" id="typewriter">{typetext}</h1>
                                <div className="pt-5">
                                    <button className="button is-medium">
                                        Download CV
                                    </button>
                                    <button className="button is-medium">
                                        Hire Me
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <img src={image}/>
                    </div>
                </div>
                <div class="level section">
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="title">15</p>
                        <p class="heading">Projects Completed</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="title">5</p>
                        <p class="heading">Cups of Coffee</p>
                
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="title">10</p>
                        <p class="heading">Happy Clients</p>
                        
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="title">3</p>
                        <p class="heading">Years Experienced</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}