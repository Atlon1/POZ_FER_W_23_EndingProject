import React from "react";
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
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </label>
                <ul className='navigation__list__container'>
                    <li className='list__item'><a className='list__link' href="/">HOME</a></li>
                    <li className='list__item'><a className='list__link' href="/">USŁUGI</a></li>
                    <li className='list__item'><a className='list__link' href="/">KONTAKT</a></li>
                    <li className='list__item'><a className='list__link' href="/">BLOG</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navigation;