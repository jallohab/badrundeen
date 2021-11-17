import React, { Component } from "react";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Programs from "./ProgramsComponent";
import ContactUs from "./ContactComponent";
import Prayers from "./PrayersComponent";
import Instructors from "./InstructorsComponent";
import Donate from "./DonateComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "../App.css";

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/instructors" component={Instructors} />
          {/* <Route path="/features" render={() => <Feature item={FEATURES} />} /> */}
          <Route path="/programs" component={Programs} />
          <Route path="/prayers" component={Prayers} />
          <Route path="/donate" component={Donate} />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default withRouter(Main);
