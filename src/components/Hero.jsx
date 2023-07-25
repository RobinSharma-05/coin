import logo from '../assets/images/svg/logo.svg'
import instagram from '../assets/images/svg/instagram.svg'
import telegram from '../assets/images/svg/telegram.svg'
import whatsapp from '../assets/images/svg/whatsapp.svg'
import { Col, Container, Row, } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [first, setfirst] = useState(true);
    return (
        <div className='bg_img'>
            <Container className='pb-4'>
                <div className="d-flex align-items-center justify-content-between py-4">
                    <img src={logo} alt="" />
                    <div className='d-flex justify-content-between w-50 align-items-center'>
                        <div
                            className={
                                first
                                    ? "top_m100 ps-0 mb-0 d-flex mobile_ul"
                                    : "top ps-0 mb-0 d-flex mobile_ul"
                            }
                        >
                            <Link className='ms-3 text-white mb-2 mb-lg-0 hover_line'
                                onClick={() => {
                                    setfirst(true);
                                }}
                            >
                                Особенности
                            </Link>
                            <Link
                                onClick={() => {
                                    setfirst(true);
                                }}
                                className="ms-3 text-white  mb-2 mb-lg-0 hover_line"
                            >
                                Отзывы
                            </Link>
                            <Link
                                onClick={() => {
                                    setfirst(true);
                                }}
                                className="ms-3 text-white  mb-3 mb-lg-0 hover_line"
                            >
                                Инвестиция
                            </Link>
                            <div className='ms-3 d-flex align-items-center gap-3 ms-0 d-lg-none'>
                                <img onClick={() => {
                                    setfirst(true);
                                }} className='translate_Y' src={instagram} alt="" />
                                <img onClick={() => {
                                    setfirst(true);
                                }} className='translate_Y' src={telegram} alt="" />
                                <img onClick={() => {
                                    setfirst(true);
                                }} className='translate_Y' src={whatsapp} alt="" />
                            </div>
                            <div className='d-lg-none d-block ms-3 set_position'
                                onClick={() => {
                                    setfirst(true);
                                }}
                            >
                                <RxCross2 size={40} color='white' />
                            </div>
                        </div>
                    </div>
                    <div className='ms-3 ms-0 d-none d-lg-block d-flex'>
                        <img className='ms-4 translate_Y' src={instagram} alt="" />
                        <img className='ms-4 translate_Y' src={telegram} alt="" />
                        <img className='ms-4 translate_Y' src={whatsapp} alt="" />
                    </div>
                    <div
                        className="d-lg-none d-block"
                        onClick={() => {
                            setfirst(false);
                        }}
                    >
                        <div className="nav_icon"></div>
                        <div className="nav_icon"></div>
                        <div className="nav_icon"></div>
                    </div>
                </div>
                <Row data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                    <Col lg={12} className='d-flex justify-content-end align-items-center'>
                        <div className='mt-5 pt-5'>
                            <p className='purple_color ff-opensans fs-28'>Лучший проект</p>
                            <h1 className='mx-w-700 ff-opensans fw-800 fs-75 text-white'>Крипто
                                <span className='ff-opensans fw-700 fs-75 purple_color'> Инвестиции</span></h1>
                            <p className='ff-opensans fw-400 fs-28 text-white mx-w-750 mt-3'>Международный проект инвестиции в криптовалюту и не только. Мы заработаем если вы заработаете!</p>
                            <div className='d-sm-flex gap-4 pt-4'>
                                <Link className='ff=opensans fw-700 fs-20 btn_1 d-flex align-items-center justify-content-center'>Присоединиться</Link>
                                <Link className='ff=opensans fw-700 fs-20 btn_2 d-flex align-items-center justify-content-center mt-4 mt-sm-0'>Подробнее</Link>
                            </div>
                            <div className='d-sm-flex gap-5 mb-5'>
                                <div className='d-flex align-items-center gap-2 py-5 justify-content-center'>
                                    <h3 className='ff-opnesans fw-700 fs-50 purple_color'>360</h3>
                                    <p className='mb-0 ff-opensans fw-400 fs-14 purple_color mx-w-90'>Довольных
                                        клиентов</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 py-0 py-sm-5 justify-content-center'>
                                    <h3 className='ff-opnesans fw-700 fs-50 purple_color'>330к</h3>
                                    <p className='mb-0 ff-opensans fw-400 fs-14 purple_color mx-w-90'>заработанных
                                        долларов</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;