import React, { useState } from "react";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
import { MEET } from "../shared/meetus";
import $ from "jquery";
import "../App.css";
import { Container } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";

const MeetUs = () => {
  const [toggle, setToggle] = useState(1);

  $(function () {
    $("#msingleton").on("click", function () {
      $("#myPhoto").attr("src", "/assets/img/mattimage.png");
    });
    $("#smccutcheon").on("click", function () {
      $("#myPhoto").attr("src", "/assets/img/sarahimage.png");
    });
    $("#ajalloh").on("click", function () {
      $("#myPhoto").attr("src", "/assets/img/Abdulai_image.jpeg");
    });
  });
  return (
    <Container className="carousel-container">
      <div>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <pre></pre>
      </div>
      <Row>
        <Col md={6}>
          <Card className="intro-bg">
            <h1 style={{ color: "#333333" }}>The Team</h1>
            <CardHeader onClick={() => setToggle(1)}>
              <span
                id="msingleton"
                className="font-weight-bold"
                style={{ color: "#333333" }}
              >
                Matt Singleton
              </span>
            </CardHeader>
            <Collapse isOpen={toggle === 1 ? true : false}>
              <CardBody>
                <p style={{ color: "black" }}>
                  {" "}
                  Matt Singleton is a new developer excited to tackle the
                  full-stack NuCamp development course. He works currently as a
                  Business Analyst for United Recovery & Remarketing and plans
                  to ply his coding knowledge at the same place upon completing
                  the course. He really enjoys being with his family and cooks
                  as a hobby.
                </p>
              </CardBody>
            </Collapse>
          </Card>

          <Card className="intro-bg">
            <CardHeader onClick={() => setToggle(2)}>
              <span
                id="smccutcheon"
                className="font-weight-bold"
                style={{ color: "#333333" }}
              >
                Sarah McCutcheon
              </span>
            </CardHeader>
            <Collapse isOpen={toggle === 2 ? true : false}>
              <CardBody>
                <p style={{ color: "black" }}>
                  {" "}
                  Sarah is a new developer whose excited to start on her front
                  end journey. After starting her career path in Quality
                  Assurance for a ticketing software solution and getting to dip
                  her feet in the development world, she fell in love with the
                  creative aspect that came with being a front end developer.
                  Her dream is to become a UI/UX designer. Dream job aside, she
                  is an avid animal lover with three very mischievious dogs and
                  a very sassy baby pet snake named Neville. She also found a
                  passion for reading at a young age. The idea of being able to
                  adventure new worlds, meet many unique characters, without
                  even leaving the comfort of your living room quickly became an
                  obession. That is probably where her love for MMO's came from,
                  as she is currently leveling her shamen Vulpera on WoW.
                </p>
              </CardBody>
            </Collapse>
          </Card>

          <Card className="intro-bg">
            <CardHeader onClick={() => setToggle(3)}>
              <span
                id="ajalloh"
                className="font-weight-bold"
                style={{ color: "#333333" }}
              >
                Abdulai Jalloh
              </span>
            </CardHeader>
            <Collapse isOpen={toggle === 3 ? true : false}>
              <CardBody>
                <p style={{ color: "black" }}>
                  {" "}
                  Abdulai is a software developer (he actually believe that this
                  is his only career..lol). He used to be interest in embeded
                  system, but recently he found out about web dev which he has
                  been focus on learning more about since. He likes to watch
                  sports, but he only play soccer. He is obseesed with learning
                  new languages. He is fluent in French, understand Arabic and
                  some spanish (which he is on his way to perfect it).
                </p>
              </CardBody>
            </Collapse>
          </Card>
        </Col>

        <Col md={6}>
          <div class="intro-bg-normal" id="photoFrame">
            <img
              id="myPhoto"
              src="/assets/img/mattimage.png"
              style={{ maxWidth: "80%", maxHeight: "80%" }}
            />
            <pre></pre>
            <h4 id="photoLabel">The GCMS Team</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetUs;
