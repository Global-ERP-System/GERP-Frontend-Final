import React, { Component } from 'react'
import './Relation.css'
import {Row, Col } from 'reactstrap';

class Relation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            college: "",
            batch: "",
            discipline: "",
            request: true
        }
        // this.college = this.college.bind(this);
        // this.batch = this.batch.bind(this);
        // this.discipline = this.discipline.bind(this);

        this.handleButton = this.handleButton.bind(this);
    }
    handlefirstname = (event) => {
        this.setState({ firstname: event.target.value })
    }
    handlelastname = (event) => {
        this.setState({ lastname: event.target.value })
    }
    handlecollege(event) {
        this.setState({ college: event.target.value });
    }
    handlebatch(event) {
        this.setState({ batch: event.target.value });
    }
    handlediscipline(event) {
        this.setState({ discipline: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
    }
    handleButton() {
        this.setState(state => ({
            request: !state.request
        }));
    }

    render() {
        return (
            <div className="bodyrelation">              
                    <div id="Relationbox">
                        <form onSubmit={this.handlesubmit}>
                        <Row>

                            <Col sm={4}>
                                <label>First Name: </label>
                                <input type="text" value={this.state.firstname} onChange={this.handlefirstname} />
                            </Col>

                            <Col sm={4}>
                                    <label>Last Name: </label>
                                    <input type="text" value={this.state.lastname}
                                    onChange={this.handlelastname} />
                            </Col>
                            <Col sm={4}>
                                    <label>college: </label>
                                    <input type="text" value={this.state.college}
                                    onChange={this.handlelastname} /><br />
                            </Col>
                        </Row>
                        <Row>

                            <Col sm={6}>
                                <label>batch: </label>

                                <select value={this.state.batch} onChange={this.handlebatch} style={{ width:'40%', margin: "8px 20px" }}>
                                    <option value={this.state.batch}>Select Batch</option>
                                </select>
                                
                            </Col>
                            <Col sm={6}>
                                
                                    <label>descipline: </label>
                                
                                <select value={this.state.discipline} onChange={this.handlediscipline} style={{ width: '40%', margin: "8px 20px" }} >
                                    <option value={this.state.discipline}>Select Discipline </option>
                                </select>
                                
                            </Col>
                        </Row>
                        <button style={{ color: "white", backgroundColor: '#138808' }} type="submit" value="Search" className="btn">Submit</button>
                            
                    </form>
                    <br/>
                </div>
                <br />
                <br />

                <center>
                    <h1 style={{ fontFamily: 'Montserrat', fontWeight: '700' }}>Your Relation</h1>
                </center>
                    <div id="Your_relation1">
                    <div className="SearchPeople">&lt;First_Name+Last_Name &gt; </div>
                    <div className="SearchPeople">&lt;College_Name&gt;</div>
                    <div className="SearchPeople">&lt;Batch_Year&gt;</div>
                    <div className="SearchPeople">&lt;Discipline&gt;</div>
                    <div className="SearchPeople"><button
                        onClick={this.handleButton}  id="connectdecline">
                        {this.state.request ? "Connect" : "Decline"}</button></div>
                    <div className="SearchPeople"> <button style={{ color: "white", backgroundColor: '#138808' }} type="submit" className="btn">Message</button></div>
                </div>
                <div id="Your_relation1">
                    <div className="SearchPeople">&lt;First_Name+Last_Name &gt; </div>
                    <div className="SearchPeople">&lt;College_Name&gt;</div>
                    <div className="SearchPeople">&lt;Batch_Year&gt;</div>
                    <div className="SearchPeople">&lt;Discipline&gt;</div>
                    <div className="SearchPeople"><button
                        onClick={this.handleButton} id="connectdecline">
                        {this.state.request ? "Connect" : "Decline"}</button></div>
                    <div className="SearchPeople"> <button style={{ color: "white", backgroundColor: '#138808' }} type="submit" className="btn">Message</button></div>
                </div>
                <div id="Your_relation1">
                    <div className="SearchPeople">&lt;First_Name+Last_Name &gt; </div>
                    <div className="SearchPeople">&lt;College_Name&gt;</div>
                    <div className="SearchPeople">&lt;Batch_Year&gt;</div>
                    <div className="SearchPeople">&lt;Discipline&gt;</div>
                    <div className="SearchPeople"><button
                        onClick={this.handleButton} id="connectdecline">
                        {this.state.request ? "Connect" : "Decline"}</button></div>
                    <div className="SearchPeople"> <button style={{ color: "white", backgroundColor: '#138808' }} type="submit" className="btn">Message</button></div>
                </div>
            </div>
        )
    }
}
export default Relation;