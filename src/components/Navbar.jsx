import React from "react"

export default function Navbar () {
    const [isActive, setisActive] = React.useState(false)
    return (
            <nav className="navbar" role="navigation" aria-label="main-navigation">
                <div className="container">
                    <div className="navbar-brand">
                    <a href = "javascript:void(0);" className="navbar-item is-uppercased">Joshua <span className="mt-4">•</span></a>
                    <a onClick={() => {
                    setisActive(!isActive);
                    }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
                </div>
                
                    <div className="navbar-menu">
                        <div className={`navbar-end ${isActive ? "is-active" : ""}`}>
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Skills
                                </a>
                                <a className="navbar-item">
                                    Projects
                                </a>
                                <a className="navbar-item">
                                    Resume
                                </a>
                                <a className="navbar-item">
                                    Contact Me
                                </a>
                        </div>
                    </div>
                </div>
            </nav>
    )
}