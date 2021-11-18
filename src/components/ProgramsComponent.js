import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
import "../App.css";

function Programs() {
  return (
    <>
      <RenderProgramInformation />
    </>
  );
}

function RenderProgramInformation() {
  return (
    <div className="mt-5 full-width-div">
      <div className="row aboutus">
        <div className="col">
          <img
            className="masthead-brand ml-3 pt-5"
            src="https://lh3.googleusercontent.com/p/AF1QipNQjjnPycgjC2V-4aG77B9Kc3gx-Q11q4QJZey2=s1280-p-no-v1"
            height="150"
            width="100"
          ></img>
        </div>
        <div className="col">
          <img
            className="masthead-brand ml-3 pt-5"
            src="https://lh3.googleusercontent.com/p/AF1QipPRmO3uAZg0OQm6aeSEAXOSsS2ZhrwTwxtQO1Yh=s1280-p-no-v1"
            height="150"
            width="100"
          ></img>
        </div>
        <div className="col">
          <img
            className="masthead-brand ml-3 pt-5"
            src="https://images.gofundme.com/1iOjK4uey-UF4EZUJACRcnehAlI=/640x480/https://d2g8igdw686xgo.cloudfront.net/47779042_1588344779726785_r.jpeg"
            height="150"
            width="100"
          ></img>
        </div>
        <div className="col-6">
          <h1 className="title">About US</h1>
          <p class="inline-p">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-6 adult-class">
          <h4>&lt; Adults classes &gt;</h4>
          <p>Interest in joining in the programs</p>
        </div>
        <div className="col-6 children-class">
          <h4>&lt; Kids classes &gt;</h4>
          <p>Interest in joining in the programs</p>
        </div>
      </div>
      <div className="row students-join">
        <div className="col-12">
          <h4>&lt; Students &gt;</h4>
          <p>Interest in joining in the programs</p>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "white" }}>
        <div className="col-12" style={{ paddingBottom: 3 }}>
          <h4 className="card-text" style={{ color: "black", fontSize: 40 }}>
            Events
          </h4>
        </div>
        <div className="col-sm-10 offset-sm-1 mb-2">
          <Card className="events">
            <CardBody>
              <h5 className="card-text" style={{ color: "blue", fontSize: 20 }}>
                Jummah Prayer
              </h5>
              <h6> 1:30PM</h6>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-10 offset-sm-1 mb-4">
          <Card className="events">
            <CardBody>
              <h5 className="card-text" style={{ color: "blue", fontSize: 20 }}>
                Others events
              </h5>
              <h6>6:00PM</h6>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Programs;
