import React from 'react';
import logo from './logo.svg';
import './App.css';
import './app.scss';
import Test from "./Test";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Service from "./components/service/Service";
import Portfolio from "./components/portolio/Portfolio";
import Contact from "./contact/Contact";

function App() {
    return (
        <div>
            <section id="Homepage">
                <Navbar />
                <Hero />
            </section>
            <section id="Service">
                <Parallax type="services" />
            </section>
            <section><Service/></section>
            <section id="Portoflio">
                <Parallax type="portfolio" />
            </section>
            <Portfolio/>


            <section id="Contact"><Contact/></section>


            {/* <Test/> */}
        </div>
    );
}

export default App;
