import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faTeletype, faSignsPost} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import '../scss/main.scss';

const Header = () => {
    const elementClock = <FontAwesomeIcon icon={faClock}/>
    const elementTel = <FontAwesomeIcon icon={faTeletype}/>
    const elementGps = <FontAwesomeIcon icon={faSignsPost}/>
    const elementFb = <FontAwesomeIcon icon={faFacebook}/>
    const elementInsta = <FontAwesomeIcon icon={faInstagram}/>

    return (
        <header className='header'>
            <div className='wrapper wrapper__header'>
                <div className='header__row'>
                    <div className='header__row__firstContainer'>
                        <div className='openShop'>
                            <span className='openShop__icon'> {elementClock}</span>
                            <span className='openShop__whenOpen'> Pon - PT 8:00 - 18: 00/ Sob 8:00 - 14:00</span>
                        </div>
                        <div className='telephone'>
                            <span className='telephone__icon'>{elementTel}</span>
                            <a href='tel:180045856987' className='telephone__number'>180045856987</a>
                        </div>
                        <div className='location'>
                            <span className='location__icon'> {elementGps}</span>
                            <span className='location__adress'> Grodzisk wielkoplski</span>
                        </div>
                    </div>
                </div>
                <div className='header__row__2'>
                    <a href='#' className='facebook__icon'>{elementFb} </a>
                    <a href='#' className='instagram__icon'>{elementInsta} </a>
                </div>
            </div>
        </header>
    )
}

export default Header;