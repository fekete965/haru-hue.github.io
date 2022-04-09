import React from "react";

export default function Contact () {
    return (
    <section className="section contact-section call-to-action has-text-white">
        <div className="container is-narrow">
            <div className="box field">
                <h2 className="title has-text-white">Contact Me</h2>
                <div className="columns">
                    <div class="control column">
                        <input class="input" type="text" placeholder="First name"/>
                    </div>
                    <div class="control column">
                        <input class="input" type="text" placeholder="Last name"/>
                    </div>
                </div>
                <div className="columns">
                    <div class="control column">
                        <input class="input" type="text" placeholder="Phone number"/>
                    </div>
                    <div class="control column">
                        <input class="input" type="text" placeholder="E-mail address"/>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <textarea class="textarea is-large" placeholder="Large textarea"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}