import React from "react";
import {Route, Link} from "react-router-dom";
import '../scss/main.scss';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='wrapper wrapper__navigation'>
                <a href='#' className='navigation__logo'>
                    <img className='navigation__logo__image' src={require('../images/LOGO.png')}
                         style={{width: '247px', height: '100px'}} alt='SekretPiekna'/>
                </a>
                <input type='checkbox' className='menu__btn' id="menu__btn"/>
                    <label htmlFor='menu__btn' className='menu__toggle'>
                        <span />
                        <span />
                        <span />
                    </label>
                <ul className='navigation__list__container'>
                    <li className='list__item'><a className='list__link' href="#Home">HOME</a></li>
                    <li className='list__item'><a className='list__link' href="#service">USŁUGI</a></li>
                    <li className='list__item'><a className='list__link' href="/">BLOG</a></li>
                    <li className='list__item'><a className='list__link' href="/">Kontakt</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navigation;