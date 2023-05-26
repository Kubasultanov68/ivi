import React from 'react';
import {Link} from "react-router-dom";

const Card = ({item}) => {
    return (
        <div className="card">
            <Link to={`/movies/${item.id}`}>
                <img src={item.poster && item.poster.url} alt="" className="card__img"/>
                <h2 className="card__title">{item.name}</h2>
                <p className="card__desc">Подписка</p>
                <div className="card__hover">
                    <p className="card__hover-rating">{item.rating.filmCritics}</p>
                    <p className="card__hover-year">{item.year}</p>
                    <p className="card__hover-genres">{item.genres[0].name}</p>
                    <p className="card__hover-country">{item.countries[0].name}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;