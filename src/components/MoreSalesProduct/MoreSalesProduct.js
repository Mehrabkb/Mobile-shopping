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
import './MoreSalesProduct.css';
import {NumericFormat} from "react-number-format";

class MoreSalesProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products : [
                {
                    'link' : 'https://google.com',
                    'img' : image1,
                    'title' : 'محصول 1',
                    'price' : '250000'
                },
                {
                    'link' : 'https://google.com',
                    'img' : image3,
                    'title' : 'محصول 1',
                    'price' : '250000'
                },
                {
                    'link' : 'https://google.com',
                    'img' : image2,
                    'title' : 'محصول 1',
                    'price' : '250000'
                },
                {
                    'link' : 'https://google.com',
                    'img' : image3,
                    'title' : 'محصول 1',
                    'price' : '250000'
                },
                {
                    'link' : 'https://google.com',
                    'img' : image1,
                    'title' : 'محصول 1',
                    'price' : '250000'
                }
            ]
        }
    }
    render(){
        const {products} = this.state;
        let items = [];
        products.forEach((result , index) => {
           items.push(<SwiperSlide>
               <div className={'item'}>
                   <a href={result.link}>
                       <img src={result.img} />
                       <h3>{result.title}</h3>
                       <div className={'price'}>
                           <span>

                           </span>
                           <span>تومان</span>
                       </div>
                   </a>
               </div>
           </SwiperSlide>);
        });
            if(window.innerWidth >= 768){
                return(
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {items}
                </Swiper>
                )
            }else{
                return(
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {items}
                    </Swiper>
                )
            }
    }
}
export default MoreSalesProduct;