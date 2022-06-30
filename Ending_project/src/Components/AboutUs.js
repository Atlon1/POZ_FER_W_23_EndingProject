import React from "react";
import '../scss/main.scss';

const AboutUs = () => {

    return (
        <section className='aboutUs'>
            <div className='wrapper'>
                <div className='aboutUs__container'>
                    <img src={require('../images/slide2.jpg')} className='aboutUs__img'/>
                    <div className="aboutUs__content">
                        <h1 className='aboutUs__header'>O nas!</h1>
                        <p className='aboutUs__text'> Kilka informacji o zakładzie</p>
                        <a href='#' className='aboutUs__button'>Czytaj więcej</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;