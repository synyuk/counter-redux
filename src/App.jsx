import React from "react";
import { useState } from "react";
import Tasklist from "./components/tasklist/tasklist";
import Counter from './components/counter/counter';
import "./App.css"

const App = () => {
    const [tab, setTab] = useState('2')

    return (
        <div className="App-wrapper">
            <ul className="App-tabs">
                <li className={tab === "1" ? "active" : ""} onClick={() => setTab('1')}>Counter</li>
                <li className={tab === "2" ? "active" : ""} onClick={() => setTab('2')}>ToDo list</li>
            </ul>
            {tab == "1" && <Counter />}
            {tab == "2" && <Tasklist />}
        </div>
    )
}

export default App;