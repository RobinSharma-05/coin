import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Bussiness = () => {
    return (
        <div className='bg_color'>
            <Container>
                <div className='pb-5'>
                    <h6 className='ff-opensans fw-400 fs-48 text-white text-center mt-5 pt-5' data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">Инвестиции</h6>
                    <p className='ff-opensans fw-400 fs-28 text-white mx-w-1080 text-center mx-auto' data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">Самые оптимальные варианты инвестиций.  Каждый найдет свой путь и начнет уверенно шагать по нему.</p>
                    <Row className='mt-5 pt-5 justify-content-center'>
                        <Col xl={4} lg={6} className='d-flex justify-content-center' data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
                            <div className="card_2 mb-5">
                                <h3 className='ff-opensans fw-700 fs-20 text-center pt-5 dark_blue'>FREE</h3>
                                <p className='ff-opensans fw-400 fs-16 mx-w-150 text-center d-flex mx-auto dark_black'>Organize across all
                                    apps by hand</p>
                                <div className='d-flex align-items-center justify-content-center gap-2'>
                                    <h1 className='ff-opensans fw-700 fs-74 dark_blue'>0</h1>
                                    <div>
                                        <p className='ff-opensans fw-700 fs-20 mb-0 dark_blue'>$</p>
                                        <p className='ff-opensans fw-400 fs-16 dark_black'>Per Month</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-center mt-3'>
                                    <ul className='ps-0'>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li>Pricing Feature</li>
                                    </ul>
                                </div>
                                <div className='d-flex align-items-center justify-content-center mt-5 pb-3'>
                                    <p className='ff-opensans fw-400 fs-20 btn_3'>Order Now</p>
                                </div>
                            </div>
                        </Col>

                        <Col xl={4} lg={6} className='d-flex justify-content-center mt-5 mt-lg-0' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <div className="card_2 mb-5">
                                <h3 className='ff-opensans fw-700 fs-20 text-center pt-5 dark_blue'>STANDARD</h3>
                                <p className='ff-opensans fw-400 fs-16 mx-w-150 text-center d-flex mx-auto dark_black'>Organize across all
                                    apps by hand</p>
                                <div className='d-flex align-items-center justify-content-center gap-2'>
                                    <h1 className='ff-opensans fw-700 fs-74 dark_blue'>10</h1>
                                    <div>
                                        <p className='ff-opensans fw-700 fs-20 mb-0 dark_blue'>$</p>
                                        <p className='ff-opensans fw-400 fs-16 dark_black'>Per Month</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-center mt-3'>
                                    <ul className='ps-0'>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li>Pricing Feature</li>
                                    </ul>
                                </div>
                                <div className='d-flex align-items-center justify-content-center mt-4 pb-3'>
                                    <p className='ff-opensans fw-400 fs-20 btn_3'>Order Now</p>
                                </div>
                            </div>
                        </Col>

                        <Col xl={4} lg={6} className='d-flex justify-content-center mt-5 mt-xl-0' data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
                            <div className="card_2 mb-5">
                                <h3 className='ff-opensans fw-700 fs-20 text-center pt-5 dark_blue'>BUSINESS</h3>
                                <p className='ff-opensans fw-400 fs-16 mx-w-150 text-center d-flex mx-auto dark_black'>Organize across all
                                    apps by hand</p>
                                <div className='d-flex align-items-center justify-content-center gap-2'>
                                    <h1 className='ff-opensans fw-700 fs-74 dark_blue'>99</h1>
                                    <div>
                                        <p className='ff-opensans fw-700 fs-20 mb-0 dark_blue'>$</p>
                                        <p className='ff-opensans fw-400 fs-16 dark_black'>Per Month</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-center mt-3'>
                                    <ul className='ps-0'>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li className='mb-3'>Pricing Feature</li>
                                        <li>Pricing Feature</li>
                                    </ul>
                                </div>
                                <div className='d-flex align-items-center justify-content-center mt-4 pb-3'>
                                    <p className='ff-opensans fw-400 fs-20 btn_3'>Order Now</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Bussiness