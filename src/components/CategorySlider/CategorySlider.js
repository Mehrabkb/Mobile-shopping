import React , {Component} from "react";
import image1 from '../../images/iphon152.jpg';
import image2 from '../../images/iphone15.jpg';
import image3 from '../../images/iphon151.jpg';
import {Swiper , SwiperSlide } from "swiper/react";
import {Navigation , Pagination , Scrollbar} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CategorySlider.css';
class CategorySlider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            categories : [
                {
                    'img' : image1,
                    'text' : 'دسته 1',
                    'link' : 'https://google.com'
                },
                {
                    'img' : image2,
                    'text' : 'دسته دو',
                    'link' : 'https://google.com'
                },
                {
                    'img' : image3,
                    'text' : 'دسته سوم',
                    'link' : 'https://google.com'
                }
            ]
        }
    }
    render(){
        const {categories} = this.state;
        let cats = [];
        categories.forEach((result , index) => {
            cats.push(<SwiperSlide>
                <div className={'item'}>
                    <a href={result.link}>
                        <img src={result.img} />
                        <h3>{result.text}</h3>
                    </a>
                </div>
            </SwiperSlide>)
        })
        return(
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
            >
                {cats}
            </Swiper>
        )
    }
}
export default CategorySlider;