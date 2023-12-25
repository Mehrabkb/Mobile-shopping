import React  , {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../../images/logo.jpg';
import menuButton from '../../images/menu.png';
import menuCloseButton from '../../images/close.png';
class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            menuList : ['خانه' , 'محصولات' , 'تماس با ما' , 'درباره ما'],
            list : []
        }
    }

    componentDidMount() {
        let temp_list = [];
        this.state.menuList.forEach((item , index) =>{
            temp_list.push(<li>
                <a href={'https://google.com'}>{item}</a></li>)
        });
        this.setState({list : temp_list});
    }
    menuButtonClick(status){
            if(status == 'show'){
                document.querySelector('div.absolute-menu').classList.add('show');
            }else if(status == 'hide'){
                document.querySelector('div.absolute-menu').classList.remove('show');
            }
        }
render(){
    const {menuList , list} = this.state;
    if(window.innerWidth > 768){
        return  (<header className={'header'}>
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
                        <img src={logo}/>
                    </a>
                </div>
            </header>
        )
    }else{
        return (<header className={'mobile-header'}>
            <div className={'menu'}>
                <button className={'menu-button'} onClick={() => this.menuButtonClick('show')} >
                    <img src={menuButton} />
                </button>
            </div>
            <div className={'logo'}>
                <a href={'https://google.com'}>
                    <img src={logo} alt=""/>
                </a>
            </div>
            <div className={'empty'}></div>
            <div className={'absolute-menu'}>
                <button className={'close-absolute-menu'} onClick={() => this.menuButtonClick('hide')} >
                    <img src={menuCloseButton} />
                </button>
                <ul>
                    {list}
                </ul>
            </div>
        </header>)
    }
    }
}
export default Header;


