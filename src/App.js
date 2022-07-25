import React from 'react';
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import SectionSlider from "./Components/SectionSlider";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ServicesPricing from "./Components/Services&Pricing";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Reservation from "./Components/Reservation";
import Information from "./Components/AboutUSComponent/Information";
import Services from "./Components/AboutUSComponent/Services";
import Products from "./Components/AboutUSComponent/Products";
import News1 from "./Components/BlogComponent/News1";
import News2 from "./Components/BlogComponent/News2";
import News3 from "./Components/BlogComponent/News3";


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Navigation/>
                <SectionSlider/>
                <Home/>
                <Routes>
                    <Route path='/' element={<AboutUs/>}/>
                    <Route path='/Services&Pricing' element={<ServicesPricing/>}/>
                    <Route path='/Blog' element={<Blog/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/reservation' element={<Reservation/>}/>
                    <Route path='/information' element={<Information/>}/>
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/blog_news1' element={<News1/>}/>
                    <Route path='/blog_news2' element={<News2/>}/>
                    <Route path='/blog_news3' element={<News3/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}