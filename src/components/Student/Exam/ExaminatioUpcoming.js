import React, { Component } from 'react'
import './Examination.css'

export default class ExaminatioUpcoming extends Component {
    render() {
        return (
            <div>
                <div className="Main_Upcomingexam">
                    <div className="Mainbox_Upcomingexam">
                        <div className="Header_Upcomingexam">
                            <h2 style={{textAlign:"center"}}>Upcoming Exam</h2>
                        </div>
                        <div className="valueFeild_Upcomingexam">
                            <h3></h3>
                            <h3></h3>
                            <h3></h3>
                        </div>
                        <div className="Values_Upcomingexam">
                            <h3>&nbsp;</h3>
                            <h3>&nbsp;</h3>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
