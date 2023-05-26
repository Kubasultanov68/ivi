import React, {useEffect} from 'react';
import {getMovies} from "../../../redux/reducers/movie";
import {useDispatch, useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Card from "../../../components/Card";

const SliderMedia = () => {
    const {data, filter} = useSelector(state => state.movie)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies(filter));
    }, []);
    return (
        <section className="slidermovie">
            <div className="container">
                <h2>
                    Фильмы
                </h2>
                <Swiper
                    navigation={true}
                    spaceBetween={24}
                    slidesPerView={7}
                    modules={[Navigation]}
                    className="mySwiper slidercard"
                    style={{marginTop: "20px"}}>
                    {
                        data.map((item, idx) => (
                            <SwiperSlide>
                                <Card item={item} key={idx}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default SliderMedia;