import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './scss/main.scss';
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import SectionSlider from "./Components/SectionSlider";
import Home from "./Components/Home";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header/>
        <Navigation/>
        <SectionSlider/>
        <Home/>
    </>
);

reportWebVitals();
