import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneMedia} from "../../redux/reducers/oneMedia";
import OneMediaLeft from "./OneMediaLeft/OneMediaLeft";
import OneMediaRight from "./OneMediaRight/OneMediaRight";

const OneMedia = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {media} = useSelector(store => store.oneMedia)

    useEffect(() => {
        dispatch(getOneMedia(params.id))
    }, [])
    console.log(media)
    return (
        <section className="onemedia">
            <div className="container">
                <div className="onemedia__content">
                   <OneMediaLeft media={media}/>
                   <OneMediaRight media={media}/>
                </div>
            </div>
        </section>
    );
};

export default OneMedia;