import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import big_man from '../assets/images/png/man-giving-introduction.png'
import { Link } from 'react-router-dom'

const InputSection = () => {
    return (
        <div>
            <Container>
                <h5 className='ff-opensans fw-400 fs-48 text-center mt-5' data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">Напишите нам</h5>
                <p className='ff-opensans fw-400 fs-28 mx-w-1080 text-center d-flex mx-auto' data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">Вопросы, отзывы, пожелания и жалобы. Мы всегда стараемся ответить быстро и нам важно узнать ваше мнение.</p>
                <Row>
                    <Col lg={6} className='mt-5' data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="1000">
                        <div>
                            <input className='ff-poppins fw-500 fs-24 input_style' type="text" placeholder='Ваше имя' />
                        </div>
                        <div className='mt-4'>
                            <input className='ff-poppins fw-500 fs-24 input_style' type="text" placeholder='Страна' />
                        </div>
                        <div className='mt-4'>
                            <textarea className='w-100 textarea ff-poppins fw-500 fs-24' name="Сообщение" placeholder='Сообщение' id="" cols="20" rows="5"></textarea>
                        </div>
                        <Link className='ff-opensans fw-700 fs-20 btn_3 mt-5'>Отправить</Link>
                    </Col>
                    <Col data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="1000">
                        <img className='w-100' src={big_man} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default InputSection