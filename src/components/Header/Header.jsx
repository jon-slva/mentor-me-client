import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"


const Header = () => {
    return (
        <header className='header'>
            <Link to="/login">Login</Link>
            <Link to="/">
                <h2 className="header__logo">MentorMe</h2>
            </Link>
            <Link to="/my-account">Account</Link>
        </header>
    )
}

export default Header
