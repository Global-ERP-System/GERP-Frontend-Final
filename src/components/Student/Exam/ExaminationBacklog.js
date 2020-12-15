import React, { Component } from 'react'
import ExaminationGrading from './ExaminationGrading'
import ExaminatioUpcoming from './ExaminatioUpcoming'
import './Examination.css'

export default class Examination extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Visibility: " "
        }
    }
    handleVisibilityChange = (event) => {
        this.setState({
            Visibility: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="Main_Backlog">
                    <h1 style={{ fontFamily: 'Montserrat', fontWeight: '700', textAlign: "center" }}>Examination</h1>
                    <br></br>
                    <div className="Mainbox_Backlog">
                        <div className="Header_Backlog">
                            <h2 style={{ textAlign: "center" }}>BackLogs</h2>
                        </div>
                        <div className="valueFeild_Backlog">
                            <select value={this.state.visibility} onChange={this.handleVisibilityChange} id="Visibility2">
                                <option value="Public">1st Sem </option>
                                <option value="ClassMate">2nd Sem</option>
                            </select>
                            <h3>Subject </h3>
                            <h3>Backlogs </h3>
                        </div>
                        <div className="Values_Backlog">
                            <h3>2 </h3>
                            <h3>DBMS </h3>
                            <h3>No </h3>

                        </div>

                    </div>
                    <ExaminationGrading></ExaminationGrading>
                    <ExaminatioUpcoming></ExaminatioUpcoming>
                </div>
            </div>
        )
    }
}
