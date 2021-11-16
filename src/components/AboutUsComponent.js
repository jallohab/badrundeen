import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function AboutUs() {
  return (
    <>
      <RenderJumbotron />
      <RenderAboutInformation />
    </>
  );
}

function RenderJumbotron() {
  return (
    <>
      <div className="row mb-4 mt-3"></div>
      <div className="jumbotron width: 100%">
        <h2 className="display-4 text-left">We are...</h2>
        <p className="lead text-left">gamers, dreamers, and quest-solvers.</p>
        <hr className="my-4" />
        <p>
          We want to help you lead or find the community that ties you together
          across games and creates an environment for you to enjoy.
        </p>
      </div>
    </>
  );
}

function RenderAboutInformation() {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-6 mycontent-left">
          <h4>Whether you're leading...</h4>
          <p>
            We know it's hard to lead and keep your community organized across
            multiple games. With GCMS, you can keep everyone together and create
            leadership within your ranks. Grow your community with us and help
            inspire others to follow your lead into new games without the need
            to wait on us to design something for you.
          </p>
        </div>
        <div className="col-6">
          <h4>...Or following</h4>
          <p>
            We get it. Finding a community that stays together is rare, and
            leading is difficult. Sometimes, you just want to join the social
            experience without the work. We work for you to create ways for the
            members of a community to feel inspired, participate with their
            community, and show off their achievements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
