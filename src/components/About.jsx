import React from "react"

export default function Country (props) {
    return (
        <section className="row">
            <div className="image--column">
                <img src={props.item.imageUrl} alt={props.item.country}></img>
            </div>
            <div className="travel--column">
                <div className = "travel--header">
                    {/* <FontAwesomeIcon icon={faLocationDot}/> */}
                    <span className="location--name">{props.item.country}</span>
                    <span className="grey-text"><a href={props.item.googleMaps}>View on Google Maps</a></span>
                </div>
                <h1 className="country--name">{props.item.name}</h1>
                <b>{props.item.periodVisited}</b>
                <p>{props.item.description}</p>
            </div>
        </section>
    )
}