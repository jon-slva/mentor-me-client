import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useRef } from "react";
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


    return (
        <div className='appContainer'>
            <BrowserRouter>
                <Header />
                <div className='pageContainer'>
                    <Routes>
                        <Route path="/" element={<Home setMarkers={setMarkers} markers={markers} />} />
                        <Route path="/search" element={<SearchResults setMarkers={setMarkers} markers={markers} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/my-account" element={<MyAccount />} />
                        {/* <Route path="/chat/:chatId" element={<ConversationPage />} /> */}
                        <Route path="/mentor/:mentorId" element={<ConversationPage />} />
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
                />
            </BrowserRouter >
        </div>
    );
};

export default App
