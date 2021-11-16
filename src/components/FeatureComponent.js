import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FEATURES } from "../shared/feature";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, Label } from "semantic-ui-react";

import "../App.css";

import { Form, Button, FormGroup, FormText } from "react-bootstrap";
import { Input } from "reactstrap";
import { Row, Col, Container } from "reactstrap";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Feature = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h3 class="mb-3">Upcoming Features</h3>
        </div>
        <div class="col-5 text-right">
          <a
            class="btn btn-primary mb-3 mr-1"
            href="#featuresCarousel"
            role="button"
            data-slide="prev"
          >
            <i class="fa fa-arrow-left" />
          </a>
          <a
            class="btn btn-primary mb-3"
            href="#featuresCarousel"
            role="button"
            data-slide="next"
          >
            <i class="fa fa-arrow-right" />
          </a>
        </div>
        <div class="col"></div>
      </div>

      <Carousel
        ssr
        partialVisbile
        props={props}
        itemClass="image-item"
        responsive={responsive}
      >
        {FEATURES.slice(0, 6).map((image) => {
          return (
            <div className="container">
              <Image
                draggable={false}
                style={{
                  width: "100%",
                  height: "310px",
                }}
                src={image.image}
              />
              <div className="titleDesc">
                <h4 className="card-title">Feature Name</h4>
                <p className="card-text">
                  Brief Feature Introduction goes here
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Feature;
