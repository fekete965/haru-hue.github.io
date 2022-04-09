import React from "react"
import travel from  "../images/travel-journal.png"
import YAF from "../images/YAF-website.png"
import business from "../images/business-card.png"
export default function Projects () {
    
    return (
        <section className="section skills-section">
            <div className="container has-text-centered">
                <h2 className="is-uppercase has-text-white">Projects</h2>
                    <div className="columns is-gapless">
                        <div className="column">
                            <figure>
                                <img src = {travel}/>
                                <figcaption>Travel Journal</figcaption>
                            </figure>
                        </div>
                        <div className="column">
                            <figure>
                                <img src = {YAF}/>
                                <figcaption>Youth Assured Foundation</figcaption>
                            </figure>
                        </div>
                        <div className="column">
                            <figure>
                                <img src = {business}/>
                                <figcaption>Business Card</figcaption>
                            </figure>
                        </div>
                    </div>
            </div>
        </section>
    )
}