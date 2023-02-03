import './ImgSlider.css'
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';
import {Navigation, Pagination} from "swiper";

export const ImgSlider = ({product}) =>{
    register();
    return (
        <>
        <swiper-container 
                modules={[Navigation, Pagination]}
                slides-per-view="1" 
                // spaceBetween={5}
                speed="500" 
                loop="true" 
                css-mode="true" 
                navigation="true" 
                pagination={{ clickable: true }}
                id="swiperGalleryProduct">

            {product["img"].map((source)=>{
                    return (
                    <swiper-slide> {/* className="swiperslide" */}
                        <img src={`../assets/products/${product["title"]}/${source["src"]}.png`}  key={`${source}`} alt={`Impresora ${product["title"]}`}/>
                    </swiper-slide >
                    )
                })}
        </swiper-container>
        </>
    )
}