import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import CategorySlider from "../CategorySlider/CategorySlider";
const Home = () => (
        <main>
            <Header />
            <Slider />
            <div className={'category-slider'}>
                <CategorySlider />
            </div>
        </main>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
