import React from 'react';
import './header.scss'
import logo from './../../images/Logo.svg'

const Header = () => {
    return(
        <header className="header">
            <div className="header__nav">
                <img src={logo} alt="" className="header__nav__logo"/>

                <div className="header__nav__links">
                    <a href="#" className="header__nav__link">About us</a>
                    <a href="#" className="header__nav__link active">Why Us?</a>
                    <a href="#" className="header__nav__link">Blog</a>
                </div>
            </div>

            <div className="header__nav__join">
                    <a href="#" className="SingUp">Sing up</a>
                    <a href="#" className="SingIn">Sing in</a>
            </div>
        </header>
    )
}

export default Header;