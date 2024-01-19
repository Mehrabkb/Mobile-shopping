import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import CategorySlider from "../CategorySlider/CategorySlider";
import MoreSalesProduct from "../MoreSalesProduct/MoreSalesProduct";
import Ads from "../Ads/Ads";
import About from "../About/About";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Products from "../Products/Products";
const Home = () => (
    <Router>
        <Header />
        <Routes>   
        <Route
            exact
            path = "/"
            element = {
                <main>
                <div className={'carousel'}>
                    <Slider />
                </div>
                <div className={'category-slider'}>
                    <div className={'title-section-container'}>
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
                <div className={'more-product-slider'}>
                    <div className={'title-section-container'}>
                        <div className={'right'}>
                            <hr/>
                        </div>
                        <h2>
                            پرفروش ها
                        </h2>
                        <div className={'left'}>
                            <hr/>
                        </div>

                    </div>
                    <div className={'box'}>
                        <MoreSalesProduct />
                    </div>
                </div>
                <div className={'ads-container'}>
                    <div className={'title-section-container'}>
                        <div className={'right'}>
                            <hr/>
                        </div>
                        <h2>
                            تبلیغات
                        </h2>
                        <div className={'left'}>
                            <hr/>
                        </div>
                    </div>
                    <Ads />
                </div>
            </main>
            }
        >
            
        </Route>
        <Route
            exact
            path='aboutus'
            element={<About />}
        >
        </Route>
            <Route
                excat
                path='products'
                element = {<Products />}
            >

            </Route>
        </Routes>
        <Footer />
    </Router>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
