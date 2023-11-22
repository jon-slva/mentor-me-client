import React from 'react'
import { useState } from "react";
import "./App.scss";
import World from './components/World/World';



const App = () => {
    const [markers, setMarkers] = useState([]);
    const [event, setEvent] = useState(null);
    const [details, setDetails] = useState(null);

    return (
        <>
            <World
                setMarkers={setMarkers}
                setEvent={setEvent}
                setDetails={setDetails}
                details={details}
                markers={markers}
            />
        </>
    );
};

export default App
