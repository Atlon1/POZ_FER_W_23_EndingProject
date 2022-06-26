import React from "react";
import '../scss/main.scss';


const Header = () => {

    return (
        <header className='header'>
            <div className='wrapper__header'>
                <div className='header__row'>
                    <div className='header__row__firstContainer'>
                        <div className='openShop'>
                            <span className='openShop__icon'> ikona</span>
                            <span className='openShop__whenOpen'> Pon - PT 8:00 - 18: 00/ Sob 8:00 - 14:00</span>
                        </div>
                        <div className='telephone'>
                            <span className='telephone__icon'> ikona</span>
                            <a href='tel:180045856987' className='telephone__number'>180045856987</a>
                        </div>
                        <div className='location'>
                            <span className='location__icon'> ikona</span>
                            <span className='location__adress'> Grodzisk wielkoplski</span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;