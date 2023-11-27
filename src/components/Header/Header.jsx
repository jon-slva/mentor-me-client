import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"


const Header = () => {
    return (
        <header className='header'>
            <Link to="/">
                <h2 className="header__logo">MentorMe</h2>
            </Link>
            <Link to="/login" className='header__account'>Account</Link>
            {/* <Link to="/my-account">Account</Link> */}
        </header>
    )
}

export default Header
