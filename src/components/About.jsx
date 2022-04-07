import { Icon } from "@iconify/react"
import React from "react"
import computer from "../images/computer-1.png"

export default function About () {
    return (
        <section className="container">
            <div className="columns is-centered">
                <div className="column">
                    <img src={computer}/>
                </div>
                <div className="column info">
                    <div className="card">
                        <div className="card-header">
                        <Icon icon="akar-icons:circle-fill" color="#ed4c5c" />
                        <Icon icon="akar-icons:circle-fill" color="#fdcb58" />
                        <Icon icon="akar-icons:circle-fill" color="#78b159" />
                        </div>
                        <div className="card-content">
                            <p>Hello, my name is Josh. I love creating and designing
                                beautiful but yet simple websites. I am currently a student
                                studying computer science and just happened to have
                                a very vast interest in front-end development.

                                Hope you enjoy your stay on the site :)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}