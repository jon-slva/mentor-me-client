import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import accountIcon from '../../assets/account icon.svg'


const Header = () => {
    return (
        <header className='header'>
            <Link to="/">
                <h2 className="header__logo">MentorMe</h2>
            </Link>
            <Link to="/login" className='header__account'>
                <p className="header__account--text">
                    Account
                </p>
                <img className="header__account--icon" src={accountIcon} alt="Account" />
            </Link>
            {/* <Link to="/my-account">Account</Link> */}
        </header>
    )
}

export default Header
