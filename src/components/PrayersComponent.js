import React, { Component } from "react";

export default class Prayers extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const api =
      "http://api.aladhan.com/v1/calendarByAddress?address=1350%20Crystal%20lake%20Rd,%20Atlanta,%20GA,%20USA&method=2&month=11&year=2021";
    fetch(api)
      .then((res) => res.json)
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {/* <ul>
          {items.data.map((item) => (
            <li key={item.timings}>{item.timings.Fajr}</li>
          ))}
        </ul> */}
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </div>
    );
  }
}
