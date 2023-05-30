import React, {useState} from "react"

import Header from "./Header"
import MainContent from "./MainContent"

function App() {
    const [dark, setDark] = useState(true)

    function toggleDark() {
        setDark(prevDark => !prevDark)
    }
    return (
        <>
            <Header 
                dark={dark}
                toggleDark={toggleDark}
            />
            <MainContent dark={dark}/>
        </>       
    )
}

export default App