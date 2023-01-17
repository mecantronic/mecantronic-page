import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import { kuboxImg , koronImg } from "../ProductsMock";

import './ImgSlider.css'


export const ImgSlider = ({product}) =>{
    let listImgSrc = product==="kubox"? kuboxImg:koronImg;
    
    return (
        <>
        <Swiper
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop
          speed={800}
          sliderPerView={1}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper w-5/12"
        >
        {listImgSrc.map((src)=>{
            return (
            <SwiperSlide className="swiperslide">
                <img src={`../assets/products/${product}/${src["src"]}.png`}  key={`${src["src"]}`} alt={`Impresora ${product}`}/>
            </SwiperSlide >
            )
        })}
        </Swiper>
        
        </>
    )
}