import React from "react";
import '../scss/main.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faLocation} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const elementClock = <FontAwesomeIcon icon={faClock}/>
    const elementLocation = <FontAwesomeIcon icon={faLocation}/>

    return (<section className='contact'>
            <div className='wrapper'>
                <div className='contact__container'>
                    <div className='contact__open'>
                        <div className='contact__clock'>{elementClock}</div>
                        <h1>Otwarte:</h1>
                        <span> Poniedziałek - Piątek: 8:00 - 18:00</span>
                        <span> Sobota: 8:00 - 14:00 </span>
                        <span> Niedziela: Zamknięte</span>
                    </div>
                    <div className='contact__adress'>
                        <div className='contact__location'>{elementLocation}</div>
                        <h1>Kontkat:</h1>
                        <span> Sekret Piękna Grodzisk Wlkp.</span>
                        <div>
                            <span> Email: </span><a href='mailto:sekretPiekana@gmail.com'
                                                    className='emial__adress'>sekretPiekana@gmail.com</a>
                        </div>
                        <div>
                            <span> Telefon: </span><a href='tel:180045856987'
                                                      className='telephone__number'>180045856987</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
export default Contact;