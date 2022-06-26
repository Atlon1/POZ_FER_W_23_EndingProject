import React from "react";
import '../scss/main.scss';

const Navigation = () => {

    return (

        <div className='navigation'>
            <div className='wrapper wrapper__navigation'>
                <a href='#' className='navigation__logo'>
                    <img className='navigation__logo__image' src='../images/LOGO.png' style={{width:'247px',height:'70px'}} alt='SekretPiekna'/>
                </a>
                <ul className='navigation__list__container'>
                    <li className='list__item'><a className='list__item__link' href="/">HOME</a></li>
                    <li className='list__item'><a className='list__item__link' href="/">USŁUGI</a></li>
                    <li className='list__item'><a className='list__item__link' href="/">KONTAKT</a></li>
                    <li className='list__item'><a className='list__item__link' href="/">BLOG</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navigation;