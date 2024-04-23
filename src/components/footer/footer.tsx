import React from 'react';
import './footer.scss'
import bigLogo from './../../images/LogoBig.svg'
import appStore from './../../images/apple.svg'
import googlePlay from './../../images/googleplay.jpg'
import bubble from './../../images/bubble.svg'
import location from './../../images/location.svg'
import sms from './../../images/message.svg'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <img src={bigLogo} alt="bigLogo" />
                    <p className="footer__info__text">
                        Maximize your investment in the capital<br/>
                        market world with the convenience and<br/>
                        various features provided by Tradiant.
                    </p>

                    <p className="footer__info__caption">Unduh Aplikasi</p>
                    <div className="footer__info__links">
                        <a href="#">
                            <img src={appStore} alt="appStore"/>
                        </a>
                        <a href="#">
                            <img src={googlePlay} alt="googlePlay" />
                        </a>
                    </div>
                </div>

                <div className="footer__list">
                    <div className="footer__list__container">
                        <a href="#" className="footer__list__container__title">Companies</a>
                        <a href="#" className="footer__list__container__item">About us</a>
                        <a href="#" className="footer__list__container__item">Blog</a>
                        <a href="#" className="footer__list__container__item">Contact</a>
                    </div>

                    <div className="footer__list__container">
                        <a href="#" className="footer__list__container__title">Resources</a>
                        <a href="#" className="footer__list__container__item">About us</a>
                        <a href="#" className="footer__list__container__item">Blog</a>
                        <a href="#" className="footer__list__container__item">Contact</a>
                    </div>

                    <div className="footer__list__container">
                        <a href="#" className="footer__list__container__title">Contact Us</a>
                        <a href="#" className="footer__list__container__item">
                            <img src={bubble} alt="bubble"/>
                            (480) 555-0103</a>
                        <a href="#" className="footer__list__container__item">
                            <img src={location} alt="location"/>
                            6391 Elgin St.Celina, Delaware 10299</a>
                        <a href="#" className="footer__list__container__item">
                            <img src={sms} alt="sms"/>
                            hub@tradiant.com</a>
                    </div>
                </div>
            </div>

            <h4 className='copyRight'>Copyright @Tradiant 2022. All Rights Reserved.</h4>     
        </footer>
    )
}

export default Footer;