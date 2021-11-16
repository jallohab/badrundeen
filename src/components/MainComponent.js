import React, { Component } from "react";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import AboutUs from "./AboutUsComponent";
import ContactUs from "./ContactComponent";
import MeetUS from "./MeetUsComponent";
import Feature from "./FeatureComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { FEATURES } from "../shared/feature";
import "../App.css";

class Main extends Component {
  render() {
    return (
      <>
        <Footer />
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/features" component={Feature} />
          {/* <Route path="/features" render={() => <Feature item={FEATURES} />} /> */}
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/meetus" component={MeetUS} />

          <Redirect to="/home" />
        </Switch>
      </>
    );
  }
}

export default withRouter(Main);
