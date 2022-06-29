import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './scss/main.scss';
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import SectionImage from "./Components/SectionImage";
import SectionSlider from "./Components/SectionSlider";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <>
        <Header/>
        <Navigation/>
        <SectionSlider/>
</>
);

reportWebVitals();
