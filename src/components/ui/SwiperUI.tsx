import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './StyleSwiper.css'
import CategoryCart from "./CategoryCart";
import type { categoryType } from "../../assets/System"

//import './style.css';
const ProductsSlider = ({ products }: {products:categoryType[]}) => {
    return (
        <>
            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {products.map((product:categoryType) => (
                    <SwiperSlide key={product.id}>
                        <CategoryCart category={product} />
                    </SwiperSlide>
                ))}
                <br /> <br />
            </Swiper>
        </>
    );
};

export default ProductsSlider;
