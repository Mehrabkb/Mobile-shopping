import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Header from "../Header/Header";
import Slider from "../Slider/Slider";

const Home = () => (
        <main>
            <Header />
            <Slider />
        </main>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
