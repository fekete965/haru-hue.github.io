import { Icon } from "@iconify/react"
import React from "react"
import programmer from "../images/Programmer.jpg"

export default function About () {
    return (
        <section className="section">
           <div className="container">
            <div className="columns is-centered">
                    <div className="column pl-5 mb-5">
                            <figure className="about">
                                <img src = {programmer}/>
                                <figcaption>Joshua 😄</figcaption>
                            </figure>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-header">
                            <Icon icon="akar-icons:circle-fill" color="#ed4c5c" />
                            <Icon icon="akar-icons:circle-fill" color="#fdcb58" />
                            <Icon icon="akar-icons:circle-fill" color="#78b159" />
                            </div>
                            <div className="card-content are-large">
                                <article>
                                    <div className="is-size-4 mb-5"> Hey there 👋</div>
                                    Hello, my name is Josh. I love creating and designing
                                    beautiful but yet simple websites. I am currently a student
                                    studying computer science and just happened to have
                                    a very vast interest in front-end development.

                                    <p className="mt-5"> Hope you enjoy yourself on the site :)</p></article>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    )
}