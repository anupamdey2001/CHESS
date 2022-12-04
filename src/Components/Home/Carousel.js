import React from "react";
import "../main.css";
import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { TypeAnimation } from "react-type-animation";
import Main1 from "../../assets/main.jpg";
import Main2 from "../../assets/main2.jpg";
import Main3 from "../../assets/main3.jpg";
import Main4 from "../../assets/main4.jpg";
import Main5 from "../../assets/main5.jpg";

function CarouselItem() {
  return (
    <div>
      {" "}
      <div className="max_height">
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              className="d-block custom_height"
              src={Main1}
              alt="One"
            />
            <Carousel.Caption>
              <TypeAnimation
                cursor={true}
                sequence={["Faculty", 3000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className="d-block custom_height"
              src={Main2}
              alt="Two"
            />
            <Carousel.Caption>
              <TypeAnimation
                cursor={true}
                sequence={["Members", 3000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className="d-block custom_height"
              src={Main3}
              alt="Two"
            />
            <Carousel.Caption>
              <TypeAnimation
                cursor={true}
                sequence={["Office Bearers", 3000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className="d-block custom_height"
              src={Main4}
              alt="Two"
            />
            <Carousel.Caption>
              <TypeAnimation
                cursor={true}
                sequence={["Alumni", 3000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className="d-block custom_height"
              src={Main5}
              alt="Two"
            />
            <Carousel.Caption>
              <TypeAnimation
                cursor={true}
                sequence={["Faculty", 3000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselItem;
