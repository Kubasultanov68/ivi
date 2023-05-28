import React from 'react';

const OneMediaLeft = ({media}) => {

    const url = media.videos && media.videos.trailers.find((item) => item.site === 'youtube' && item.url.includes('embed'))?.url || null

    return (
        <div className="onemedia__left">
            <h3 className="onemedia__left-title">
                Фильмы
            </h3>
            <iframe
                className="poster"
                width="600" height="510" src={url}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
            </iframe>
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
    );
};

export default OneMediaLeft;