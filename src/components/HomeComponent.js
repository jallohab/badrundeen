import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Home = () => {
  return (
    <div>
      <h1
        className="title"
        style={{
          padding: 60,
          fontSize: 70,
          justifyContent: "center",
        }}
      >
        Badrundeen Masjid
      </h1>
      <strong>
        <h2 className="inTitle">
          <span style={{ color: "orange" }}>ALLAH</span> HELP THOSE
        </h2>
      </strong>
      <strong>
        <h2 className="inTitle">
          WHO HELP <span style={{ color: "yellow" }}>THEMSELVES</span>
        </h2>
      </strong>
      <div
        className="row offset mb-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{ padding: 40 }}>
          <a href="/about" className="btn btn-lg btn-primary">
            Learn more
          </a>
        </div>

        <div style={{ padding: 40 }}>
          <a href="/about" className="btn btn-lg btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
