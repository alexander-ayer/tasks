import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Why LeBron is the G.O.A.T.</h1>
            <ul>
                <li>He scoreas alot of points</li>
                <li>He gets a lot of assists</li>
                <li>He gets a lot of ebounds</li>
            </ul>
            <img src="../images/LeBron.png" alt="A picture of the King" />
            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
            <div>
                This is <span style={ {backgroundColor: 'red'} }>colored text</span>.
            </div>
        </div>
    );
}

export default App;
