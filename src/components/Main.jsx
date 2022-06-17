import React from "react";
import Typewriter from "typewriter-effect";
import image from "../images/black-boy.png";

export default function Main() {
  const typetext = (
    <Typewriter
      options={{
        strings: [
          "Web Designer",
          "Graphics Designer",
          "UI/UX Designer",
          "Front-end Developer",
          "Freelancer",
          "Web Developer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
  return (
    <main className="is-fluid">
      <div className="container">
        <div className="columns">
          <div className="column info">
            <div className="hero">
              <div className="hero-body">
                <h2 className="subtitle">Hello, This is Joshua!</h2>
                <h1 className="title">I am a</h1>
                <h1 className="title" id="typewriter">
                  {typetext}
                </h1>
                <div className="pt-5">
                  <a href="../Uko Joshua CV.pdf">
                    <button className="button is-medium">Download CV</button>
                  </a>
                  <a href="mailto:ukojoshy@gmail.com">
                    <button className="button is-medium cv-button">
                      Hire Me
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={image} alt="Joshua" />
          </div>
        </div>
      </div>
    </main>
  );
}
