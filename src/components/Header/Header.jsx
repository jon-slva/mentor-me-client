import React from 'react'
import { Link } from 'react-router-dom'
import "./Header"


const Header = () => {
    return (
        <header className='header'>
            <Link to="/">Home</Link>
            <Link to="/">Account</Link>
        </header>
    )
}

export default Header
