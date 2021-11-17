import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { INSTRUCTORS } from "../shared/Instructors";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, Label } from "semantic-ui-react";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";

import "../App.css";

import { Form, Button, FormGroup, FormText } from "react-bootstrap";
import { Input } from "reactstrap";
import { Row, Col, Container } from "reactstrap";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
class Feature extends Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };
  render() {
    return (
      <>
        <div class="row">
          <div class="col-4">
            <a class="btn " href="#featuresCarousel"></a>
            <a class="btn " href="#featuresCarousel"></a>
          </div>
        </div>

        <Carousel
          ssr
          partialVisbile
          props={this.props}
          itemClass="image-item"
          responsive={responsive}
        >
          {INSTRUCTORS.slice(0, 6).map((e, i) => {
            return (
              <div
                className="container"
                style={{ margin: 50, paddingRight: 60 }}
              >
                <Image
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "300px",
                  }}
                  src={e.image}
                />
                <div className="titleDesc">
                  <Card onClick={this.toggle}>
                    <CardHeader>
                      <span
                        id="msingleton"
                        className="font-weight-bold"
                        style={{ color: "#333333" }}
                      >
                        <h4 className="card-title">{e.name}</h4>
                      </span>
                    </CardHeader>
                    <Collapse isOpen={this.state.collapse}>
                      <CardBody>
                        <p className="card-text">{e.description}</p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </div>
            );
          })}
        </Carousel>
      </>
    );
  }
}

export default Feature;
