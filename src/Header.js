import React from "react"

import logo from "./images/react-logo.png"

function Header(props) {
    const {dark, toggleDark} = props

    return (
        <>
            <header>
                <nav className={`nav ${dark ? "dark" : ""}`}>
                    <img src={logo} className="logo"/>
                    <h2 className="logo-hl">ReactFacts</h2>
                    <div 
                        className="toggler" 
                    >
                        <p className="toggler--light">Light</p>
                        <div 
                            className="toggler--slider"
                            onClick={toggleDark}
                        >
                            <div className="toggler--slider--circle"></div>
                        </div>
                        <p className="toggler--dark">Dark</p>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header