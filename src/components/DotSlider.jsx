import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import dot_slick_1st_image from '../assets/images/svg/dot_slick_1st_image.svg'
import star_image from '../assets/images/svg/star_image.svg'

const DotSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div>
            <Container className='pt-3 pb-5' data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1000">
                <h4 className='ff-opensans fw-400 fs-43 dark_blue text-center mt-5'>Отзывы наших партнеров</h4>
                <p className='ff-opensans fw-400 fs-28 dark_black text-center mx-w-950 d-flex mx-auto mb-5 mt-4'>Каждый отзыв по-особенному  ценный для нас. Ведь для этого было проделано большой совместный путь. Успех состоит из доверие, готовности к развитию и перемен.</p>
                <Slider {...settings}>

                    <div className='d-flex justify-content-center my-5'>
                        <div className='card_1'>
                            <div className='d-flex align-itmes-center justify-content-between mt-2'>
                                <div className='d-flex align-itmes-center gap-3'>
                                    <img src={dot_slick_1st_image} alt="" />
                                    <div>
                                        <h5 className='text-white ff-opensans fw-700 fs-18'>Leo</h5>
                                        <p className='text-white mb-0 ff-opensans fw-400 fs-12'>Таджикистан</p>
                                    </div>
                                </div>
                                <div className='mt-4 pt-2'>
                                    <img src={star_image} alt="" />
                                </div>
                            </div>
                            <p className='text-white mt-4 pb-2 mb-5 ff-opensans fw-400 fs-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center my-5'>
                        <div className='card_1'>
                            <div className='d-flex align-itmes-center justify-content-between mt-2'>
                                <div className='d-flex align-itmes-center gap-3'>
                                    <img src={dot_slick_1st_image} alt="" />
                                    <div>
                                        <h5 className='text-white ff-opensans fw-700 fs-18'>Leo</h5>
                                        <p className='text-white mb-0 ff-opensans fw-400 fs-12'>Lead Designer</p>
                                    </div>
                                </div>
                                <div className='mt-4 pt-2'>
                                    <img src={star_image} alt="" />
                                </div>
                            </div>
                            <h6 className='ff-opensans fw-700 fs-16 mb-0 text-white mt-3'>It was a very good experience</h6>
                            <p className='text-white mt-4 ff-opensans fw-400 fs-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                        </div>

                    </div>

                    <div className='d-flex justify-content-center my-5'>
                        <div className='card_1'>
                            <div className='d-flex align-itmes-center justify-content-between mt-2'>
                                <div className='d-flex align-itmes-center gap-3'>
                                    <img src={dot_slick_1st_image} alt="" />
                                    <div>
                                        <h5 className='text-white ff-opensans fw-700 fs-18'>Али</h5>
                                        <p className='text-white mb-0 ff-opensans fw-400 fs-12'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='mt-4 pt-2'>
                                    <img src={star_image} alt="" />
                                </div>
                            </div>
                            <h6 className='ff-opensans fw-700 fs-16 mb-0 text-white mt-3'>It was a very good experience</h6>
                            <p className='text-white mt-4 ff-opensans fw-400 fs-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center my-5'>
                        <div className='card_1'>
                            <div className='d-flex align-itmes-center justify-content-between mt-2'>
                                <div className='d-flex align-itmes-center gap-3'>
                                    <img src={dot_slick_1st_image} alt="" />
                                    <div>
                                        <h5 className='text-white ff-opensans fw-700 fs-18'>Leo</h5>
                                        <p className='text-white mb-0 ff-opensans fw-400 fs-12'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='mt-4 pt-2'>
                                    <img src={star_image} alt="" />
                                </div>
                            </div>
                            <p className='text-white mt-4 mb-5 ff-opensans fw-400 fs-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center my-5'>
                        <div className='card_1'>
                            <div className='d-flex align-itmes-center justify-content-between mt-2'>
                                <div className='d-flex align-itmes-center gap-3'>
                                    <img src={dot_slick_1st_image} alt="" />
                                    <div>
                                        <h5 className='text-white ff-opensans fw-700 fs-18'>Али</h5>
                                        <p className='text-white mb-0 ff-opensans fw-400 fs-12'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='mt-4 pt-2'>
                                    <img src={star_image} alt="" />
                                </div>
                            </div>
                            <p className='text-white mt-4 mb-5 ff-opensans fw-400 fs-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center my-5'>
                        <div className='card_1'>
                            <div className='d-flex align-itmes-center justify-content-between mt-2'>
                                <div className='d-flex align-itmes-center gap-3'>
                                    <img src={dot_slick_1st_image} alt="" />
                                    <div>
                                        <h5 className='text-white ff-opensans fw-700 fs-18'>Али</h5>
                                        <p className='text-white mb-0 ff-opensans fw-400 fs-12'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='mt-4 pt-2'>
                                    <img src={star_image} alt="" />
                                </div>
                            </div>
                            <p className='text-white mt-4 mb-5 ff-opensans fw-400 fs-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                        </div>
                    </div>

                </Slider>
            </Container>
        </div>
    )
}

export default DotSlider