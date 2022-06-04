import React from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';

import puebla1 from '../puebla1.jpg'
import puebla2 from '../puebla2.jpg'
import puebla3 from '../puebla3.png'

const Carruselconteiner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="carru"
                    src={puebla1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carru"
                    src={puebla2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carru"
                    src={puebla3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Carruselconteiner;