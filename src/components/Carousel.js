import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap'


function SlideDeck(props) {

    const {
        slides
    } = props;

    const cSlides = slides.carousel_slides

    return (
        <Carousel fade >
            {cSlides.map(slide => (
                <Carousel.Item className="car-item">
                    <img
                        className="d-block w-100"
                        src={slide.image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="slide-title">{slide.title}</h3>
                        <p className='carousel-content'>{slide.content}</p>
                        <Button className="slide-button" variant="warning">LEARN MORE</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}

        </Carousel>

    )
}

export default SlideDeck;