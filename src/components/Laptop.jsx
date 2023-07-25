import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import macbook from '../assets/images/png/macbook.png'
import { Link } from 'react-router-dom'

const Laptop = () => {
    return (
        <div>
            <Container>
                <Row className='flex-column-reverse flex-lg-row py-5'>
                    <Col lg={5} className='mt-5 mt-lg-0' data-aos="zoom-in-right" data-aos-delay="800" data-aos-duartion="1000">

                        <h4 className='ff-opensans fw-400 fs-48'>Invest Coin - это про
                            безопасность!</h4>
                        <p className='ff-opensans fw-400 fs-22'>
                            И как выражается безопасность?Чем меньше вложений в инвестиции, тем больше риска потерпеть неудачу. Чем больше вложений, тем тем меньше риска.
                            Безопасность инвестии означает что ваши вложения (10$ или 100$) отдельно не инвестируются. Наши опытные инвесторы делают ставки с общего счета, где на балансе всегда больше 100 000$.
                        </p>
                        <p className='ff-opensans fw-400 fs-22 mx-w-390'>Нажмите на кнопку ниже и узнайте все лично от наших менеджеров</p>
                        <Link className='ff-opensans fw-700 fs-20 btn_1 mt-4'>Узнать подробнее</Link>

                    </Col>
                    <Col lg={7} className='justify-content-center d-flex align-items-center' data-aos="zoom-in-left" data-aos-delay="800" data-aos-duartion="1000">
                        <img className='w-75 keyframe' src={macbook} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Laptop