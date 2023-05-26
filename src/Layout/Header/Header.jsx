import React, {useState} from 'react';
import {Link} from "react-router-dom";

//media
import {AiOutlineSearch} from "react-icons/ai";
import {BiUser} from "react-icons/bi";
import logo from './logo.svg'
import HeaderSearch from "./HeaderSearch/HeaderSearch";

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        <Link to={'/'}>
                            <h1>
                                <img src={logo} alt="Ivi"/>
                            </h1>
                        </Link>
                        <div className="header__menu">
                            <Link to={'/'} className="header__link">
                                Мой иви
                            </Link>
                            <Link to={'/movies'} className="header__link">
                                Фильмы
                            </Link>
                            <Link to={'/series'} className="header__link">
                                Сериалы
                            </Link>
                            <Link to={'/cartoons'} className="header__link">
                                Мультфильмы
                            </Link>
                        </div>
                    </div>
                    <div className="header__right">
                        <button className="header__search" onClick={() => setOpen(!open)}>
                            <AiOutlineSearch/>
                            Поиск
                        </button>
                        <Link to={'/register'} className="header__user">
                            <BiUser/>
                        </Link>
                    </div>
                </nav>
                <HeaderSearch open={open} setOpen={setOpen}/>
            </div>
        </header>
    );
};

export default Header;