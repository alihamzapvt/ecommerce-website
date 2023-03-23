import React from "react";
import { Carousel } from "react-bootstrap";
import buyer from "./buyer.jpg";
import amazone from "./amazone.jpg";
import add from "./add.jpg";
export default function BootstrapCarousel() {
  return (
    <div>
      {" "}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={buyer}
            alt="First slide"
            style={{ height: "52vh" }}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={amazone}
            alt="Second slide"
            style={{ height: "52vh" }}
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={add}
            alt="Third slide"
            style={{ height: "52vh" }}
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
