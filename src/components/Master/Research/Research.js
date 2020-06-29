import React, { Component } from "react";  

import { Table } from 'reactstrap';
import './Research.css';

class Research extends Component{
    render() {
        return (
            <div>
                <div id="header">
                    <h1 id="main-head"><b>Research</b></h1>                    
                </div>

                <Table id="contents">
                    <thead>
                    <tr className="first noHover">
                            <th>Paper</th>
                            <th>Year</th>
                            <th>Name</th>                            
                            <th>Topic</th>
                            <th>Link of Project</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Abc</th>                            
                            <th>2nd</th>
                            <th>XYZ</th>
                            <th>Economy</th>
                            <th><a href="#">Link of Project</a></th>
                        </tr>
                        <tr>
                            <th scope="row">Abc</th>                            
                            <th>2nd</th>
                            <th>XYZ</th>
                            <th>Economy</th>
                            <th><a href="#">Link of Project</a></th>
                        </tr>
                        
                        
                    </tbody>
                </Table>

            </div>

        );
    }
}

export default Research;