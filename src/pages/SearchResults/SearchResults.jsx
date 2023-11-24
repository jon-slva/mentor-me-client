import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar'
import './SearchResults.scss'


const SearchResults = ({ setMarkers, markers }) => {


    return (
        <main className='page-container'>
            <SearchBar
                setMarkers={setMarkers}
                markers={markers}
            // query={query}
            // setQuery={setQuery}
            />
        </main>
    )
}

export default SearchResults
