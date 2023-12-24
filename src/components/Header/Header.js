import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const menuList = ['خانه' , 'تماس با ما' , 'درباره ما']
let list = [];

menuList.forEach((item , index) =>{
   list.push(<li>
       <a href={'https://google.com'}>{item}</a></li>)
});

const Header = () => (
    <header className={'header'}>
        <nav>
            <ul>
                {list}
            </ul>
        </nav>
    </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
