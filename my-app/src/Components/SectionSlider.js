import React from "react";

import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

import Slide1 from "./slide1.jpg";
import Slide2 from "./slide2.jpg";


const SectionSlider = () => {


    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
    };

    const imgStyles = {
        width: "100%",
        height: "320px",
        objectFit: "cover"
    };

    const imgs = [
        Slide1, Slide2, Slide2
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
        speed: 300,
        responsive: {
            420: {
                items: 2
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
                            src= {loadingImage}
                            data-src={el}
                            alt=""
                            style={imgStyles}
                        />
                    </div>
                ))}
            </TinySlider>

        </>
    )


}

export default SectionSlider;