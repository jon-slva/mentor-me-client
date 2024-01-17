import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import World from './components/World/World';
import Header from './components/Header/Header';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.scss'
import SignUp from './pages/SignUp/SignUp';
import MyAccount from './pages/MyAccount/MyAccount';
import SearchResults from './pages/SearchResults/SearchResults';
import ConversationPage from './pages/ConversationPage/ConversationPage';


const App = () => {
    const [markers, setMarkers] = useState([]);
    const [event, setEvent] = useState(null);
    const [details, setDetails] = useState(null);
    // const location = useLocation();
    console.log(event)

    function markerTooltipRenderer(marker) {
        console.log(marker)
        return `${marker.name} ${marker.city}`;
    }


    const options = {
        markerTooltipRenderer
    };

    function onClickMarker(marker, markerObject, event) {
        setEvent({
            type: "CLICK",
            marker,
            markerObjectID: markerObject.uuid,
            pointerEventPosition: { x: event.clientX, y: event.clientY }
        });
        setDetails(markerTooltipRenderer(marker));
    }

    function onDefocus(previousFocus) {
        setEvent({
            type: "DEFOCUS",
            previousFocus
        });
        setDetails(null);
    }

    return (
        <div className='appContainer'>
            <BrowserRouter>
                <Header setMarkers={setMarkers} />
                <div className='pageContainer'>
                    <Routes>
                        <Route path="/" element={<Home setMarkers={setMarkers} markers={markers} />} />
                        <Route path="/search" element={<SearchResults setMarkers={setMarkers} markers={markers} onClickMarker={onClickMarker} />} />
                        <Route path="/search/:searchTerm" element={<SearchResults setMarkers={setMarkers} markers={markers} onClickMarker={onClickMarker} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/my-account" element={<MyAccount />} />
                        {/* <Route path="/chat/:chatId" element={<ConversationPage />} /> */}
                        <Route path="/mentor/:mentorId" element={<ConversationPage setMarkers={setMarkers} markers={markers} setEvent={setEvent} />} />
                        <Route path="/terms-conditions" />
                        <Route path="/privacy-policy" />
                        <Route path="/*" notFoundPage={<NotFoundPage />} />
                    </Routes>
                </div>
                <World
                    setMarkers={setMarkers}
                    setEvent={setEvent}
                    setDetails={setDetails}
                    details={details}
                    markers={markers}
                    onClickMarker={onClickMarker}
                    onDefocus={onDefocus}
                    options={options}
                />
            </BrowserRouter >
        </div>
    );
};

export default App
