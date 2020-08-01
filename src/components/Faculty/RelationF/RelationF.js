import React, { Component } from 'react'
import { Container, Row, Col ,FormGroup, Label, Input,Button,Card, CardTitle, CardText, ButtonToggle } from 'reactstrap';
import "./RelationF.css"


const Relation = (props) => {
    return (
        <div className="RelationFbody">
            <div className="relationFbox">
              
                    <Row>

                        <Col sm={6}>
                        <label>First Name: </label>
                        <input type="text" id="Firstname" placeholder="" style={{ width:"275px" , }} />
                        </Col>

                        <Col sm={6}>
                            <label>Last Name: </label>
                        <input type="text" id="Lastname" placeholder="" style={{ width: "275px", }}/>
                        </Col>
                      
                    </Row>
                    <Row>

                        <Col sm={6}>
                            <label>College: </label>
                        <input type="text" id="College" placeholder="" style={{ width: "275px", }}/>
                        </Col>
                        <Col sm={6}>

                            <label>Department: </label>
                        <input type="text" id="Department" placeholder="" style={{ width: "275px", }}/>
                           </Col>
                    </Row>
                <button style={{ color: "white", backgroundColor: '#138808' }} type="submit" value="Search" className="btn">Search</button>
                <br/>
               
            </div>
            <br />
            <br />
            <center>
                <h1 style={{ fontFamily: 'Montserrat', fontWeight: '700' }}>Your Relation</h1>
            </center>
            <br />
            <div id="Your_relation1">
                <div className="SearchPeople">&lt;First_Name+Last_Name &gt; </div>
                <div className="SearchPeople">&lt;College_Name&gt;</div>
                <div className="SearchPeople">&lt;Department&gt;</div>
                <div className="SearchPeople"><ButtonToggle color="success">Connect</ButtonToggle>{' '}</div>
                <div className="SearchPeople"> <ButtonToggle color="primary">Message</ButtonToggle>{' '}</div>
            </div>

            <div id="Your_relation1">
                <div className="SearchPeople">&lt;First_Name+Last_Name &gt; </div>
                <div className="SearchPeople">&lt;College_Name&gt;</div>
                <div className="SearchPeople">&lt;Department&gt;</div>
                <div className="SearchPeople"><ButtonToggle color="success">Connect</ButtonToggle>{' '}</div>
                <div className="SearchPeople"> <ButtonToggle color="primary">Message</ButtonToggle>{' '}</div>
            </div>

            <div id="Your_relation1">
                <div className="SearchPeople">&lt;First_Name+Last_Name &gt; </div>
                <div className="SearchPeople">&lt;College_Name&gt;</div>
                <div className="SearchPeople">&lt;Department&gt;</div>
                <div className="SearchPeople"><ButtonToggle color="success">Connect</ButtonToggle>{' '}</div>
                <div className="SearchPeople"> <ButtonToggle color="primary">Message</ButtonToggle>{' '}</div>
            </div>


        </div>


   
  );
}

export default Relation;