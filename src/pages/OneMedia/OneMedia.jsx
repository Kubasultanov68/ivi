import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneMedia} from "../../redux/reducers/oneMedia";

const OneMedia = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {media} = useSelector(store => store.oneMedia)

    useEffect(() => {
        dispatch(getOneMedia(params.id))
    }, [])

    return (
        <section className="onemedia">
            <div className="container">
                <div className="onemedia__content">
                    <div className="onemedia__left">
                        <h3 className="onemedia__left-title">
                            Фильмы
                        </h3>
                        <img src={media.poster && media.poster.url} alt="poster"/>
                        <div className="onemedia__left-btns">
                            <div className="footer__card-btns">
                                <button className="footer__card-btn">
                                    Трейлер
                                </button>
                                <button className="footer__card-btn">
                                    Бесплатные сериалы
                                </button>
                            </div>
                        </div>
                     </div>
                    <div className="onemedia__right">
                        <h2 className="onemedia__right-title">
                            {media.name}
                        </h2>
                        <div className="onemedia__right-info">
                            <p className="onemedia__right-year">
                                {media.year}-2023  +{media.ageRating}
                            </p>
                        </div>
                        <div className="onemedia__right-lang">
                            <div>
                                <button className="onemedia__right-hd">
                                    FullHD
                                </button>
                            </div>
                            Рус
                        </div>
                        <p className="onemedia__right-desc">
                            {media.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OneMedia;