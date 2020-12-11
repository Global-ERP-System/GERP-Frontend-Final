import React from "react";
import "./appreciation.css";
import { Card, CardBody, CardTitle } from "reactstrap";
import BadgeClass from "./badge.js";

class Appreciation extends React.Component {
  render() {
    return (
      <div className="Appreciate">
        <Card>
          <CardTitle>
            <h2 className="text-center">APPRECIATION PAGE</h2>
          </CardTitle>
          <br />
          <br />
          <CardBody>
            <form className="form-group">
              <label>Student Roll No :</label>
              <br />
              <input
                className="form-control"
                type="text"
                name="roll"
                style={{ width: "75%", margin: "0" }}
                placeholder="Enter student roll number"
              />
              <br />
              <label>Appreciation Message: </label>
              <br />
              <textarea
                className="form-control"
                placeholder="Message"
                style={{ width: "75%" }}
              ></textarea>
              <br />
              <label>Give a Badge : </label>
              <br />
              <BadgeClass />
              <br />

              <div className="SubmitButton">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Appreciation;
