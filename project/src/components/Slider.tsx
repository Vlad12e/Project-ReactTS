import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';

const Slider: React.FC = () => {
  return (
    <div className="parent-container">
      <div className="Slider-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/img/banner2.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/img/banner2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/img/banner2.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
