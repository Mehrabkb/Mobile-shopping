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
            images : [image1 , image2 , image3]
        }
    }
    componentDidMount() {
        let sliderItems = document.querySelectorAll('.slider-item');
        sliderItems.forEach(result => {
            result.style.backgroundImage = `url(${result.getAttribute('data-image')})`;
        })
    }

    render(){
        return(
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className={'slider-item'}  data-image={image1}>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'slider-item'} data-image={image2}>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'slider-item'} data-image={image3}>

                    </div>
                </SwiperSlide>
            </Swiper>
        )
    }
}
export default Slider;