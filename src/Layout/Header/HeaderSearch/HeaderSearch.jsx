import React, {useEffect, useState} from 'react';
import instance from "../../../utils/axios";
import {Link} from "react-router-dom";

const HeaderSearch = ({open, setOpen}) => {

    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        instance(`/movie?name=${search}`)
            .then(({data}) => setData(data.docs))
            .catch((error) => console.log(error))
    }, [search])

    const handleItemClick = () => {
        setOpen(false); // Устанавливаем значение open в false, чтобы изменить display на none
    };

    return (
        <div className="headersearch"
            style={{display: open ? 'flex' : "none"}}
        >
            <div className="container">
                <div className="headersearch__row">
                    <h2>поиск</h2>
                    <div>
                        <input
                            type="search"
                            placeholder="Введите имя"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <span onClick={() => setOpen(!open)}>x</span>
                    </div>
                </div>
                <ul className="headersearch__menu">
                    {
                        search.length ?
                            data.map((item) => (
                                <Link
                                    onClick={() => {
                                        setOpen(!open)
                                        setSearch('')
                                    }}
                                    to={`/movies/${item.id}`} className="headersearch__menu-item">
                                    {item.name}
                                    <br/>
                                    {item.year}
                                </Link>
                            )) : ''
                    }
                </ul>
            </div>
        </div>
    );
};

export default HeaderSearch;