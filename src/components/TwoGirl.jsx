import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import businessman_showing_thumbsup from '../assets/images/png/businessman-showing-thumbs-up.png'
import girl_image_1 from '../assets/images/png/girl_image_1.png'
import girl_image_2 from '../assets/images/png/girl_image_2.png'
import { Link } from 'react-router-dom'
import play_btn from '../assets/images/svg/play_btn.svg'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TwoGirl = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <h2>Amazon</h2>
                </Modal.Header>
                <Modal.Body>
                    You Can Start now
                    <iframe width="460" height="315" src="https://www.youtube.com/embed/rYGw76kbA4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <a
                        target="blank"
                        className="ff-bold fc_black d-inline-block full_screen ff_open_sans fs_14 "
                        variant="primary"
                        onClick={handleClose}
                        href="https://youtu.be/rYGw76kbA4E"
                    >
                        Play
                    </a>
                </Modal.Footer>
            </Modal>
            <Container>
                <Row>
                    <Col lg={6} className='mt-4' data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000">
                        <div className='d-flex'>
                            <img className='w-33' src={businessman_showing_thumbsup} alt="" />
                            <div className='position-relative'>
                                <img className='w-100' src={girl_image_1} alt="" />
                                <img onClick={handleShow} className='position-absolute w-25 play_btn_position_2' src={play_btn} alt="" />
                            </div>
                            <div className='position-relative'>
                                <div className='mt-5 pt-3'>
                                    <img className='w-100' src={girl_image_2} alt="" />
                                </div>
                                <img onClick={handleShow} className='position-absolute w-25 play_btn_position_3' src={play_btn} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='ps-0 ps-lg-5 mt-5' data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000">
                            <h4 className='ff-opensans fw-700 fs-20'>Обучение?</h4>
                            <p className='ff-opensans fw-400 fs-36 mx-w-450'><span className='ff-opensans fw-400 fs-40'>Конечно!</span> Индивидуальные уроки тем кто хочет научиться инвестировать.</p>
                            <p className='ff-opensans fw-700 fs-20'>Подробнее посмотрите на видео</p>
                            <p className='ff-opensans fw-400 fs-18'>Или напишите менеджеру</p>
                            <Link className='ff-opensans fw-400 fs-20 btn_3'>Написать</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TwoGirl