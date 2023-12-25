import React ,  {Component} from "react";
import {Swiper , SwiperSlide } from "swiper/react";
import {Navigation , Pagination , Scrollbar} from "swiper/modules";
import 'swiper/css';
import image1 from '../../images/iphone15.jpg';
import image2 from '../../images/iphon151.jpg';
import image3 from '../../images/iphon152.jpg';
import './Slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            images : [
                {
                    'img' : image1,
                    'text' : 'به سایت ما خوش آمدید'
                },
                {
                    'img' : image2,
                    'text' : 'به سایت ما خوش آمدید'
                },
                {
                    'img' : image3,
                    'text' : 'به سایت ما خوش آمدید'
                }
            ]
        }
    }
    componentDidMount() {
        let sliderItems = document.querySelectorAll('.slider-item');
        let images = this.state.images;
        sliderItems.forEach( function (result , i) {
            result.style.backgroundImage = `url(${images[i]['img']})`;
        })
    }

    render(){
        const {images} = this.state;
        let items = [];
        images.forEach((result , i) => {
            items.push(<SwiperSlide>
                <div className={'slider-item'} data-image={images[i]['img']}>
                    <h2>{images[i]['text']}</h2>
                </div>
            </SwiperSlide>)
        })
        return(
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {items}
            </Swiper>
        )
    }
}
export default Slider;