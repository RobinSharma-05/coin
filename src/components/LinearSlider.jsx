import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import bitcoin from '../assets/images/png/bitcoin.png'
import Litecoin from '../assets/images/png/Litecoin.png'
import tezos from '../assets/images/png/tezos.png'
import ethereum from '../assets/images/png/ethereum.png'
import Chainlink from '../assets/images/png/Chainlink.png'
import ton from '../assets/images/png/ton.png'

const LinearSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        cssEase: 'linear',
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div>
            <Container className='mt-5 pt-5 pt-lg-0' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                <h3 className='ff-opensans fw-400 fs-48 text-center'>Наши площадки</h3>
                <p className=' ff-opensans fw-400 fs-28 mx-w-950 mx-auto d-flex text-center mt-3'>Наш проект работает только с проверенными площадками для инвестиций, чтобы максимально снизить риски.</p>
                <Slider {...settings} className='pb-4 mt-5'>
                    <div> pointer_cursor
                        <img className='w-75 mt-1 pointer_cursor' src={bitcoin} alt="" />
                    </div>
                    <div>
                        <img className='w-75 mt-1 pointer_cursor' src={Litecoin} alt="" />
                    </div>
                    <div>
                        <img className='w-75 pointer_cursor' src={tezos} alt="" />
                    </div>
                    <div>
                        <img className='w-75 mt-2 pointer_cursor' src={ethereum} alt="" />
                    </div>
                    <div>
                        <img className='w-75 pointer_cursor' src={Chainlink} alt="" />
                    </div>
                    <div>
                        <img className='w-75 pointer_cursor' src={ton} alt="" />
                    </div>
                    <div>
                        <img className='w-75 mt-2 pointer_cursor' src={ethereum} alt="" />
                    </div>
                    <div>
                        <img className='w-75 pointer_cursor' src={tezos} alt="" />
                    </div>
                    <div>
                        <img className='w-75 pointer_cursor' src={ton} alt="" />
                    </div>
                </Slider>
                <p className='line d-flex mx-auto my-5'></p>
            </Container>
        </div>
    )
}

export default LinearSlider