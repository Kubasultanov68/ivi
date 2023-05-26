import React from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";



const SliderBegin = () => {
    return (
        <>
            {/*<div className="conatiner">*/}
            <Swiper
                navigation={true}
                spaceBetween={24}
                centeredSlides={true}
                loop={true}
                modules={[Navigation]}
                className="mySwiper beginslider">
                <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage15/contents/5/e/e85d12450f7b5ebf3e5da97c64bc4d.jpg/1216x370/?q=85) center/cover no-repeat`}}></SwiperSlide>
                <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage15/contents/5/e/e85d12450f7b5ebf3e5da97c64bc4d.jpg/1216x370/?q=85) center/cover no-repeat`}}></SwiperSlide>
                <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage15/contents/5/e/e85d12450f7b5ebf3e5da97c64bc4d.jpg/1216x370/?q=85) center/cover no-repeat`}}></SwiperSlide>
                <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage15/contents/5/e/e85d12450f7b5ebf3e5da97c64bc4d.jpg/1216x370/?q=85) center/cover no-repeat`}}></SwiperSlide>
            </Swiper>
            {/*</div>*/}

        </>
    );
};

export default SliderBegin;