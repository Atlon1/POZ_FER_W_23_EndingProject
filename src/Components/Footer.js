import React from "react";
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Footer = () => {

    const elementFb = <FontAwesomeIcon icon={faFacebook}/>
    const elementInsta = <FontAwesomeIcon icon={faInstagram}/>

    return (
        <section className='footer'>
            <div className='wrapper'>
                <div className='footer__container'>
                    <div className='footer__firstColumn'>
                        <div>ThemeAtlonLandingPage © 2022. All Rights Reserved.</div>
                    </div>
                    <div className='footer__secColumn'>
                        <a href='#'>{elementFb}</a>
                        <a href='#'>{elementInsta}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;