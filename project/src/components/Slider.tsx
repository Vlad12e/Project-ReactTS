import React from "react";
import { Carousel } from "react-bootstrap";
import './Slider.css'

const Slider: React.FC = () => {
  return (
    <div className="Slider">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/img/banner2.png"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/img/banner2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/img/banner2.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};


export default Slider;
