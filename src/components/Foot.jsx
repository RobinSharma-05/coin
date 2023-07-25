import React from 'react'
import logo from '../assets/images/svg/logo.svg'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Foot = () => {

    return (
        <div className='bg_color mt-5 pb-5'>
            <Container>
                <Row>

                    <Col lg={6} data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                        <div className='d-md-flex align-items-center gap-5'>
                            <Link> <img className='mt-5 mt-md-0 mb-0' src={logo} alt="" /></Link>
                            <div>
                                <p className='text-white ff-jost fw-400 fs-24 mt-5 pt-md-5 mx-w-300'>123 Market St. #22B
                                    Charlottesville, California 44635</p>
                                <p className='text-white ff-poppins fw-400 fs-14'><Link className='text-white underline'>contact@exmpl.page</Link></p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                        <div className='d-flex gap-5 mt-5 pt-5'>
                            <ul className='me-5 mt-2 ps-0'>
                                <li className='mb-3 ff-poppins fw-400 fs-12'><Link className='text-white hover_line'>About</Link></li>
                                <li className='mb-3 ff-poppins fw-400 fs-12'><Link className='text-white hover_line'>Growers</Link></li>
                                <li className='mb-3 ff-poppins fw-400 fs-12'><Link className='text-white hover_line'>Merchants</Link></li>
                                <li className='mb-3 ff-poppins fw-400 fs-12'><Link className='text-white hover_line'>Partners</Link></li>
                                <li className='ff-poppins fw-400 fs-12'><Link className='text-white hover_line'>Contact</Link></li>
                            </ul>
                            <ul className='text-white ms-5 mt-2 ps-0'>
                                <li className='mb-3 ff-poppins fw-400 fs-12'><Link className='text-white hover_line'>Facebook</Link></li>
                                <li className='mb-3 ff-poppins fw-400 fs-12'><Link className='text-white hover_line'>Telegram</Link></li>
                                <li className='mb-3 ff-poppins fw-400 fs-12'><Link className='text-white hover_line'>Watsapp</Link></li>
                                <li className='ff-poppins fw-400 fs-12'><Link className='text-white hover_line'>Instagram</Link></li>
                            </ul>
                        </div>
                    </Col>

                </Row>
                <p className='mt-5 text-white pt-5 text-center ff-poppins fw-400 fs-12'><Link className='text-white hover_line'>© 2022 Invest Coin. All rights reserved.</Link></p>
            </Container>
        </div>
    )
}

export default Foot