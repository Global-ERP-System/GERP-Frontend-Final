import React, { Component } from "react";  

import { Table,Container, Row, Col, Input, Label } from 'reactstrap';
import './faculty.css';

class TimeTable extends Component {
    render() {
        return (
            <div>
                <div id="header">
                    <h1 id="main-head"><u><b>FACULTY</b></u></h1>
                    <h2 id='head'><b>Time-Table</b></h2>
                </div>
                <Table id="contents">
                    <thead>
                    <tr className="first noHover">
                            <th>Days</th>
                            <th>Branch</th>
                            <th>Year</th>
                            <th>Timings</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Monday</th>                            
                            <th>CS</th>
                            <th>1st</th>
                            <th>8:00 - 10:00</th>
                        </tr>
                        <tr>
                            <th scope="row"></th>                            
                            <th>CS</th>
                            <th>2nd</th>
                            <th>11:00 - 12:00</th>
                        </tr>
                        <tr>
                            <th scope="row"></th>                            
                            <th>CS</th>
                            <th>3rd</th>
                            <th>1:00 - 3:00</th>
                        </tr>
                        <tr>
                            <th scope="row">Tuesday</th>                            
                            <th>CS</th>
                            <th>2nd</th>
                            <th>8:00 - 10:00</th>
                        </tr>
                    </tbody>
                </Table>

            </div>

        );

        
    }
}

export default TimeTable;