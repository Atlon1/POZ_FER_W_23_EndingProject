import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import SectionSlider from "./Components/SectionSlider";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ServicesPricing from "./Components/Services&Pricing";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import './scss/main.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header/>
        <Navigation/>
        <SectionSlider/>
        <Home/>
        <AboutUs/>
        <ServicesPricing/>
        <Blog/>
        <Contact/>
        <Footer/>
    </>
);