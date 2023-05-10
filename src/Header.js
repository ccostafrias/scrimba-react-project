import React from "react"

import logo from "./images/react-logo.png"

function Header() {
    return (
        <>
            <header>
                <nav className="nav">
                    <img src={logo} className="logo"/>
                    <h2 className="logo-hl">ReactFacts</h2>
                    <h3>React Course - Project 1</h3>
                </nav>
            </header>
        </>
    )
}

export default Header