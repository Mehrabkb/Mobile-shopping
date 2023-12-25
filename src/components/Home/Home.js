import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import CategorySlider from "../CategorySlider/CategorySlider";
const Home = () => (
        <main>
            <Header />
            <div className={'carousel'}>
                <Slider />
            </div>
            <div className={'category-slider'}>
                <div className={'category-title-container'}>
                    <div className={'right'}>
                        <hr/>
                    </div>
                    <h2 className={'category-title'}>دسته بندی</h2>
                    <div className={'left'}>
                        <hr/>
                    </div>
                </div>
                <CategorySlider />
            </div>
        </main>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
