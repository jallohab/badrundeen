import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

const Prayers = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     isLoaded: false,
  //   };
  // }

  const [items, setItems] = useState([]);
  // const api =
  //     "http://api.aladhan.com/v1/calendarByAddress?address=1350%20Crystal%20lake%20Rd,%20Atlanta,%20GA,%20USA&method=2&month=11&year=2021";

  useEffect(() => {
    fetch(
      "http://api.aladhan.com/v1/calendarByAddress?address=1350%20Crystal%20lake%20Rd,%20Atlanta,%20GA,%20USA&method=2&month=11&year=2021"
    )
      .then((response) => response.json())

      .then((data) => setItems(data.data));
  }, []);

  // componentDidMount() {

  //   fetch(api)
  //     .then((res) => res.json)
  //     .then((json) => {
  //       this.setState({
  //         isLoaded: true,
  //         items: json,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  const prayers = items.slice(0, 1);
  return (
    <div style={{ paddingTop: 120 }}>
      <h4 className="title" style={{ paddingBottom: 25, color: "yellow" }}>
        Prayers will change depends on whether, so make sure to check all of the
        time.
      </h4>
      {items && items.length > 0
        ? prayers.map((pray, i) => {
            return (
              <div key={i}>
                <Table
                  className="title"
                  striped
                  bordered
                  hover
                  variant="dark"
                  style={{ backgroundColor: "black" }}
                >
                  <thead>
                    <tr>
                      <th
                        className={"w-25"}
                        style={{ color: "white", fontSize: 25 }}
                      >
                        Prayers 🛐
                      </th>
                      <th
                        className={"w-25"}
                        style={{ color: "white", fontSize: 25 }}
                      >
                        Times ⏱
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ color: "white" }}>Fajr</td>
                      <td style={{ color: "white" }}>{pray.timings.Fajr}</td>
                    </tr>
                    <tr>
                      <td style={{ color: "white" }}>Dhuhr</td>
                      <td style={{ color: "white" }}>{pray.timings.Dhuhr}</td>
                    </tr>
                    <tr>
                      <td style={{ color: "white" }}>Asr</td>
                      <td style={{ color: "white" }}>{pray.timings.Asr}</td>
                    </tr>
                    <tr>
                      <td style={{ color: "white" }}>Maghrib</td>
                      <td style={{ color: "white" }}>{pray.timings.Maghrib}</td>
                    </tr>
                    <tr>
                      <td style={{ color: "white" }}>Isha</td>
                      <td style={{ color: "white" }}>{pray.timings.Isha}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
};

export default Prayers;
