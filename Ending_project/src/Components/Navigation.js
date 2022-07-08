import React from "react";
import {Link} from "react-router-dom";
import '../scss/main.scss';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='wrapper wrapper__navigation'>
                    <div className='navigation__logo'>
                        <Link to='/'><img src={require('../images/../images/LOGO.png')} style={{
                            width: '200px',
                            height: '100px'
                        }}/></Link>
                    </div>
                <input type='checkbox' className='menu__btn' id="menu__btn"/>
                    <label htmlFor='menu__btn' className='menu__toggle'>
                        <span />
                        <span />
                        <span />
                    </label>
                <ul className='navigation__list__container'>
                    <li className='list__item'>
                        <div className='list__link'>
                        <Link to='/'>HOME</Link>
                        </div>
                    </li>
                    <li className='list__item'>
                        <div className='list__link'>
                            <Link to='/Services&Pricing'>USŁUGI</Link>
                        </div>
                    </li>
                    <li className='list__item'>
                        <div className='list__link'>
                            <Link to='/Blog'>BLOG</Link>
                        </div>
                    </li>
                    <li className='list__item'>
                        <div className='list__link'>
                            <Link to='/Contact'>KONTAKT</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navigation;