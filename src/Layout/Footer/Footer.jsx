import React from 'react';
import {Link} from "react-router-dom";

//media
import {BiMessageAltDetail} from 'react-icons/bi'
import {IoCallOutline} from 'react-icons/io5'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__top">
                        <div className="footer__card">
                            <span className="footer__card-title">
                                О нас
                            </span>
                            <div className="footer__card-links">
                                <p className="footer__card-link">
                                    О компании
                                </p>
                                <p className="footer__card-link">
                                    Вакансии
                                </p>
                                <p className="footer__card-link">
                                    Программа бета-тестирования
                                </p>
                                <p className="footer__card-link">
                                    Информация для партнёров
                                </p>
                                <p className="footer__card-link">
                                    Размещение рекламы
                                </p>
                                <p className="footer__card-link">
                                    Пользовательское соглашение
                                </p>
                                <p className="footer__card-link">
                                    Политика конфиденциальности
                                </p>
                                <p className="footer__card-link">
                                    Комплаенс
                                </p>
                            </div>
                        </div>
                        <div className="footer__card">
                            <span className="footer__card-title">
                                Разделы
                            </span>
                            <div className="footer__card-links">
                                <Link to={''} className="footer__card-link">
                                    Мой Иви
                                </Link>
                                <Link to={'/movies'} className="footer__card-link">
                                    Фильмы
                                </Link>
                                <Link to={'/series'} className="footer__card-link">
                                    Сериалы
                                </Link>
                                <Link to={'/cartoons'} className="footer__card-link">
                                    Мультфильмы
                                </Link>
                                <Link to={'/new'} className="footer__card-link">
                                    Что нового
                                </Link>
                            </div>
                        </div>
                        <div className="footer__card">
                            <span className="footer__card-title">
                                Служба поддержки
                            </span>
                            <div className="footer__card-links">
                                <p className="footer__card-link">
                                    Мы всегда готовы вам помочь.
                                    <br/>
                                    Наши операторы онлайн 24/7
                                </p>
                                <div>
                                    <button className="footer__card-btn footer__card-title">
                                        Написать в чате
                                    </button>
                                </div>
                                <div className="footer__card-btns">
                                    <button className="footer__card-btn">
                                        <BiMessageAltDetail/>
                                    </button>
                                    <button className="footer__card-btn">
                                        <IoCallOutline/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <span className="footer__desc">
                            © 2023 ООО «Иви.ру»
                            <br/>
                            HBO ® and related service marks are the property of Home Box Office, Inc
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;