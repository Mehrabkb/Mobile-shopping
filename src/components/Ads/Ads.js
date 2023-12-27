import React , {Component} from "react";
import image1 from '../../images/iphon151.jpg';
import image2 from '../../images/iphone15.jpg';
import './Ads.css';
class Ads extends Component{

    constructor(props) {
        super(props);
        this.state = {
            ads : [
                {
                    'img' : image1,
                    'link' : 'https://google.com'
                },
                {
                    'img' : image2,
                    'link' : "https://google.com"
                }
            ]
        }
    }

    render(){
        const {ads} = this.state;
        let adsItems = [];
        ads.forEach((item , index) => {
            adsItems.push(
                <div className={'item'}>
                    <a href={item.link}>
                        <img src={item.img} alt="" />
                    </a>
                </div>
            )
        })
        return(
            <div className={'ads'}>
                {adsItems}
            </div>
        )
    }


}
export default Ads