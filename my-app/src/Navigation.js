import React from "react";
import './scss/main.scss';

const Navigation = () => {

    return (

        <header className='navigation'>
            <div className='wrapper__navigation'>
                <h1 className='navigation__h1'> Salon Kosmetyczny</h1>
                <ul className='navigation__list__container'>
                    <li className='list__item'><a className='list__item__link' href="/">HOME</a></li>
                    <li className='list__item'><a className='list__item__link' href="/">USŁUGI</a></li>
                    <li className='list__item'><a className='list__item__link' href="/">KONTAKT</a></li>
                    <li className='list__item'><a className='list__item__link' href="/">BLOG</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Navigation;