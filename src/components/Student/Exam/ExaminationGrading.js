import React, { Component } from 'react'
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
                <div className="Main_Grading">
                    <div className="Mainbox_Grading">
                        <div className="Header_Grading">
                            <h2 style={{textAlign:"center"}}>Grading</h2>
                        </div>
                        <div className="valueFeild_Grading">
                            <select value={this.state.visibility} onChange={this.handleVisibilityChange} id="Visibility2">
                                <option value="Public">1st Sem </option>
                                <option value="ClassMate">2nd Sem</option>
                            </select>
                            <h3>Subject </h3>
                            <h3>Backlogs </h3>
                        </div>
                        <div className="Values_Grading">
                            <h3>1</h3>
                            <h3>2</h3>
                            <h3>3</h3>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
