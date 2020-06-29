import React, { Component } from 'react'
import './Relation.css'

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
            <div style={{marginBottom:'17%'}}>
                <div id="container">
                    <div id="Relationbox">
                        <form onSubmit={this.handlesubmit}>
                            <div style={{marginLeft:"15%",marginRight:"15%"}}>
                            <label>First Name: </label>
                            <input type="text" value={this.state.firstname}
                                onChange={this.handlefirstname} />
                            <label>Last Name: </label>
                            <input type="text" value={this.state.lastname}
                                onChange={this.handlelastname} /><br />
                            <label>
                                <select value={this.state.college} onChange={this.handlecollege} style={{width:'100%'}}>
                                    <option value={this.state.college}>Select Your College </option>
                                </select>
                            </label>
                            <label>
                                <select value={this.state.batch} onChange={this.handlebatch} style={{width:'100%', margin:'0px 20px'}}>
                                    <option value={this.state.batch}>Select Batch</option>
                                </select>
                            </label>
                            <label>
                                <select value={this.state.discipline} onChange={this.handlediscipline} style={{width:'100%', margin:'0px 50px'}}>
                                    <option value={this.state.discipline}>Select Discipline </option>
                                </select>
                            </label>
                            </div>
                            <br />
                            <input type="submit" value="Search" />
                        </form>
                    </div>
                </div>
                <h1 id="relationheading">Your Relation</h1>
                <div id="Your_relation">
                    <div className="SearchPeople">&lt; First_Name / Last_Name / First_Name+Last_Name &gt; </div>
                    <div className="SearchPeople">&lt;College_Name&gt;</div>
                    <div className="SearchPeople">&lt;Batch_Year&gt;</div>
                    <div className="SearchPeople">&lt;Discipline&gt;</div>
                    <div className="SearchPeople"><button
                        onClick={this.handleButton}  id="connectdecline">
                        {this.state.request ? "Connect" : "Decline"}</button></div>
                </div>
            </div>
        )
    }
}
export default Relation;