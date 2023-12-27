import React , {Component} from "react";
import './Footer.css';
import logo from '../../images/logo.jpg';
class Footer extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="logo-container">
                        <img
                            src={logo}
                            alt="Your Logo"
                            className="logo"
                        />
                        <span className="logo-text">Aria Shop</span>
                    </div>
                    <div className="contact">
                        <p>تماس با ما  </p>
                        <p>Email: mkordbacheh75@gmail.com</p>
                        <p>Phone: 09369849997</p>
                    </div>
                    <div className="social-media">
                        <p>ما را دنبال کنید</p>
                        <a href="https://instagram.com/mehrabviolin" className="social-link">
                            Instagram
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;