import React from "react";
import { Row, Col, ButtonToggle } from "reactstrap";
import Table from "react-bootstrap/Table";
import "./Relation.css";

const Relation = (props) => {
  let list = [];
  for (let i = 0; i < 3; i++) {
    list.push(
      <div id="Your_relation1">
        <Table hover striped style={{ backgroundColor: "whitesmoke" }}>
          <tr>
            <td className="SearchPeople">First_Name+Last_Name</td>
            <td className="SearchPeople">College_Name</td>
            <td className="SearchPeople">Batch</td>
            <td className="SearchPeople">Discipline</td>
            <td className="SearchPeople">
              {" "}
              <ButtonToggle color="danger">Block</ButtonToggle>{" "}
            </td>
            <td>
              {" "}
              <ButtonToggle color="primary">Message</ButtonToggle>{" "}
            </td>
          </tr>
        </Table>
      </div>
    );
  }

  return (
    <div className="RelationFbody">
      <div className="relationFbox">
        <Row>
          <Col sm={6}>
            <div className="relationInputs">
              <label>First Name: </label>
              <input type="text" id="Firstname" placeholder="" />
            </div>
          </Col>

          <Col sm={6}>
            <div className="relationInputs">
              <label>Last Name: </label>
              <input type="text" id="Lastname" placeholder="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div className="relationInputs">
              <label>College: </label>
              <input type="text" id="College" placeholder="" />
            </div>
          </Col>
          <Col sm={6}>
            <div className="relationInputs">
              {" "}
              <label>Batch: </label>
              <select>
                <option>Select Batch</option>
                <option>2000</option>
                <option>2001</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row>
        <Col sm={6}>
        <div className="relationInputs">
          {" "}
          <label>Discipline: </label>
          <select>
            <option>Select discipline</option>
            <option>MBA</option>
            <option>B.Tech</option>
          </select>
        </div>
      </Col>
        </Row>
        <button
          style={{ color: "white", backgroundColor: "#138808" }}
          type="submit"
          value="Search"
          className="btn"
        >
          Submit
        </button>
        <br />
      </div>
      <br />
      <br />
      <center>
        <h1 style={{ fontFamily: "Montserrat", fontWeight: "700" }}>
          Your Relation
        </h1>
      </center>
      <br />
      <div style={{ overflow: "auto" }}>{list}</div>
    </div>
  );
};

export default Relation;
