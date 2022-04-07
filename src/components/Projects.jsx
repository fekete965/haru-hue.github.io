import React from "react"

export default function Project (props) {
    const { image, title } = props
    return (
        <figure>
            <img src = {image}/>
            <figcaption>{title}</figcaption>
        </figure>
    )
}