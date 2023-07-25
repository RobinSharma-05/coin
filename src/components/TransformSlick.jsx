import React, { useState } from 'react'
import Slider from "react-slick";
import traslate_slick_1st_image from '../assets/images/png/translate_slick_1st_image.png'
import translate_slick_2nd_image from '../assets/images/png/translate_slick_2nd_image.png'
import translate_slick_3rd_image from '../assets/images/png/translate_slick_3rd_image.png'
import play_btn from '../assets/images/svg/play_btn.svg'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TransformSlick = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '1px',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2.7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className='overflow-hidden'>
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
            <div className='my-5' data-aos="zoom-in" data-aos-delay="300" data-aos-duartion="1000">
                <Slider {...settings}>

                    <div className='px-5 py-5 position-relative'>
                        <img className='w-90 border_radius' src={traslate_slick_1st_image} alt="" />
                        <img onClick={handleShow} className='w-10 position-absolute play_btn_position' src={play_btn} alt="" />
                    </div>

                    <div className='px-5 py-5 position-relative'>
                        <img className='w-90 border_radius' src={translate_slick_2nd_image} alt="" />
                        <img onClick={handleShow} className='w-10 position-absolute play_btn_position' src={play_btn} alt="" />
                    </div>

                    <div className='px-5 py-5 position-relative'>
                        <img className='w-90 border_radius' src={translate_slick_3rd_image} alt="" />
                        <img onClick={handleShow} className='w-10 position-absolute play_btn_position' src={play_btn} alt="" />
                    </div>

                    <div className='px-5 py-5 position-relative'>
                        <img className='w-90 border_radius' src={translate_slick_2nd_image} alt="" />
                        <img onClick={handleShow} className='w-10 position-absolute play_btn_position' src={play_btn} alt="" />
                    </div>

                </Slider>
            </div>


        </div>
    )
}

export default TransformSlick