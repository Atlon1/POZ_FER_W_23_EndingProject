import React from "react";

import TinySlider from "tiny-slider-react";
import '../scss/main.scss';
import "tiny-slider/dist/tiny-slider.css";
import Slide1 from "../images/slide3.jpg";
import Slide2 from "../images/slide1.jpg";
import Slide3 from "../images/slide5.jpg";
import {Link} from "react-router-dom";

const SectionSlider = () => {
    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
    };

    const imgStyles = {
        width: "100%",
        height: "400px",
        objectFit: "cover"
    };

    const imgs = [
        Slide1, Slide2, Slide3
    ];

    const loadingImage =
        Slide1;

    const settings = {
        lazyload: true,
        nav: false,
        mouseDrag: true,
        loop: true,
        items: 1,
        gutter: 5,
        autoplay: true,
        speed: 400,
        responsive: {
            420: {
                items: 1
            }
        }
    };

    return (
        <>
            <TinySlider settings={settings}>
                {imgs.map((el, index) => (
                    <div key={index} style={{position: "relative"}}>
                        <img
                            className={`tns-lazy-img`}
                            src={loadingImage}
                            data-src={el}
                            alt=""
                            style={imgStyles}
                        />
                    </div>
                ))}
            </TinySlider>
            <div className='wrapper wrapper__sigin'>
                <div className='sigin__container'>
                    <h1> Odwiedź nasze centrum relaksu!</h1>
                    <p className='sigin__content'> Dokonaj rezerwacji i zapisz sie!</p>
                    <div className='sigin__button'>
                        <Link to="/reservation">Zrób rezerwacje</Link>
                    </div>
                    {/*<a href='../boking.js' className='sigin__button'>Zrób rezerwacje</a>*/}
                </div>
            </div>
        </>
    )
}

export default SectionSlider;