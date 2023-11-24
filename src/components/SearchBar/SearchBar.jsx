import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchBar.scss';
import dropShadow from '../../assets/Asset 1.png';
// import { useNavigate, useLocation } from 'react-router-dom';


const SearchBar = ({ setMarkers, setEvent, setDetails, markers }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();



    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/mentors?s=${encodeURIComponent(query)}`);

                const mentors = response.data.mentors;

                const globeMarkers = mentors.map((mentor) => {
                    return {
                        id: mentor.id,
                        city: mentor.city, // You may want to use a combination of city and country for a more accurate representation
                        color: 'blue', // or any other color based on your preference
                        coordinates: [parseFloat(mentor.lat), parseFloat(mentor.long)], // Convert strings to numbers
                        value: mentor.value || 0, // Assuming mentor has a 'value' property
                    };
                });

                setMarkers(globeMarkers)
                console.log(markers);

            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                fetchData();
                // Update the URL without refreshing the page
                // navigate(`/search?s=${encodeURIComponent(query)}`);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [query, navigate]);


    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                className='search__bar'
                placeholder='Search...'
                value={query}
                onChange={handleInputChange}
            />
        </>
    );
};

export default SearchBar;