import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import FooterYou from '../../Shared/Footer/FooterYou';
import Intro from "../Intro/Intro";
import Gallery from '../Gallery/Gallery';
import "./Home.css";

const Home = () => {
    return (
        <div className='content-container'>
            <Header></Header>
            <Services></Services>
            <Appointment></Appointment>
            <Blog></Blog>
            <Gallery />
            <Testimonial></Testimonial>
            <Intro />
            <Doctor></Doctor>
            {/* <Contact></Contact> */}
            <FooterYou ></FooterYou>
        </div>
    );
};

export default Home;