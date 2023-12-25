import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../../images/logo.jpg';

const menuList = ['خانه' , 'محصولات' , 'تماس با ما' , 'درباره ما']
let list = [];

menuList.forEach((item , index) =>{
   list.push(<li>
       <a href={'https://google.com'}>{item}</a></li>)
});

const Header = () => (
    <header className={'header'}>
        <div className={'user-box'}>
            <a href={'https://google.com'}>پنل کاربری</a>
        </div>
        <nav>
            <ul>
                {list}
            </ul>
        </nav>
        <div className={'logo'}>
            <a>
                <img src={logo} />
            </a>
        </div>
    </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
