import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bit_calender from '../assets/images/png/bit_calender.png'
import bit_in_glass from '../assets/images/png/bit_in_glass.png'
import bit_file from '../assets/images/png/bit_file.png'

const InvestCoin = () => {
    return (
        <>
            <Container>
                <h4 className='ff-opensans fw-400 fs-48 dark_blue text-center mt-5 pt-5' data-aos="zoom-in" data-aos-delay="100" data-aso duration="1000">Как “Invest Coin” работает? </h4>
                <p className=' d-flex mx-auto ff-opensans fw-400 fs-28 mx-w-1080 text-center mt-4 dark_black' data-aos="zoom-in" data-aos-delay="100" data-aso duration="1000">Invest Coin - это команда оптыных инвесторов, аналитиков и программистов. Мы работаем на площадках криптовалют (и не только) уже более 4 года и имеем конкурентоспособное портфолио. Все встречи, общения и договоренности с нашими партнерами (клиентами) проходят в прозрачной форме.</p>
                <Row className='justify-content-center mt-5 pt-4 mb-5'>
                    <Col lg={4} sm={6} className='d-flex justify-content-lg-end justify-content-center' data-aos="fade-down" data-aos-delay="100" data-aso-duration="1000">
                        <div className='text-center d-flex'>
                            <div>
                                <img src={bit_calender} alt="" />
                                <h4 className='ff-opensans fw-700 fs-20 dark_blue mt-2'>Надежность</h4>
                                <p className='ff-opensans fw-400 fs-18 text-center dark_black mx-w-230 mt-3'>Slate helps you see how
                                    many more days you need
                                    to work to reach your
                                    financial goal.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='d-flex justify-content-center' data-aos="fade-up" data-aos-delay="100" data-aso-duration="1000">
                        <div className='text-center d-flex mt-4 mt-sm-0'>
                            <div>
                                <img src={bit_in_glass} alt="" />
                                <h4 className='ff-opensans fw-700 fs-20 dark_blue mt-2'>Опыт</h4>
                                <p className='ff-opensans fw-400 fs-18 text-center dark_black mx-w-230 mt-3'>Slate helps you see how
                                    many more days you need
                                    to work to reach your
                                    financial goal.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='d-flex justify-content-lg-start justify-content-center' data-aos="fade-down" data-aos-delay="100" data-aso-duration="1000">
                        <div className='text-center d-flex mt-lg-0 mt-4'>
                            <div>
                                <img src={bit_file} alt="" />
                                <h4 className='ff-opensans fw-700 fs-20 dark_blue mt-2'>Прозрачность</h4>
                                <p className='ff-opensans fw-400 fs-18 text-center dark_black mx-w-230 mt-3'>Slate helps you see how
                                    many more days you need
                                    to work to reach your
                                    financial goal.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InvestCoin