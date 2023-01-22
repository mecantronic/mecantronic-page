import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import './ImgSlider.css'

export const ImgSlider = ({product}) =>{
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
          className="mySwiper"
        >
        {product["img"].map((source)=>{
            return (
            <SwiperSlide className="swiperslide">
                <img src={`../assets/products/${product["title"]}/${source["src"]}.png`}  key={`${source}`} alt={`Impresora ${product["title"]}`}/>
            </SwiperSlide >
            )
        })}
        </Swiper>
        
        </>
    )
}