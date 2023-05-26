import React, {useEffect} from 'react';
import Card from "../../components/Card";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redux/reducers/movie";
import SelectGenres from "./SelectGenres/SelectGenres";
import SelectYears from "./SelectYears/SelectYears";
import SelectCountries from "./SelectCountries/SelectCountries";

const Movies = () => {

    const {data, filter} = useSelector(state => state.movie)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies(filter))
    },[filter])

    return (
        <section className="movies">
            <div className="container">
                <div className="selects">
                    <SelectGenres/>
                    <SelectYears/>
                    <SelectCountries/>
                </div>
                <div className="movies__row">
                    {
                        data.map((item, idx) => (
                            <Card item={item} key={item.id && idx}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Movies;