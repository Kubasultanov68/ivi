import React from 'react';

const OneMediaRight = ({media}) => {
    return (
        <div className="onemedia__right">
            <h2 className="onemedia__right-title">
                {media.name}
            </h2>
            <div className="onemedia__right-info">
                <p className="onemedia__right-year">
                    {media.year}-2023  +{media.ageRating}
                </p>
            </div>
            <div className="onemedia__right-genres">
                {
                    media.genres?.map((item) => (
                        <p className="onemedia__right-genre">
                            {' ' + item.name.toUpperCase() + ' '}
                        </p>)
                    )
                }
            </div>
            <div className="onemedia__right-lang">
                <div>
                    <button className="onemedia__right-hd">
                        FullHD
                    </button>
                </div>
                Рус
            </div>
            <div className="onemedia__right-persons">
                <div className="onemedia__right-persons_row">
                    {
                        media.persons?.filter((item, idx) => idx < 6).map((item) => (
                            <div className="onemedia__right-person">
                                <div>
                                    <img src={item.photo} alt="" className="onemedia__right-person_img"/>
                                    <p className="onemedia__right-person_name">{item.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <p className="onemedia__right-desc">
                {media.description}
            </p>
            <div className="onemedia__right-rating">
                <div className="onemedia__right-rating_left">
                    <div className="onemedia__right-rating_rate">
                        {media.rating && media.rating.imdb}
                    </div>
                    Рейтинг Иви
                </div>
                <div className="onemedia__right-rating_right">
                    <div>
                        <button className="onemedia__right-hd">
                            Оценить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneMediaRight;