import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function(name) {
                    return <h1>Hey there, {name}</h1>
                }
            }/>
        </div>
    )
}

export default App