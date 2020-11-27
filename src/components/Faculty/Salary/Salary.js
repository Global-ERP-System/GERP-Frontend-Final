import React, { Component } from "react";
import { Table } from 'reactstrap';
import './Salary.css'

class Salary extends Component{
    render() {
        return (
            <div className="Salary">
                <header ></header>
                 <h1 id='title'><b>Salary</b></h1>

                <Table id="contents" striped bordered hover>
                    <thead>
                        <tr id="first">
                            <th>S. No.</th>
                            <th>Month</th>
                            <th>A/c no</th>
                            <th>Bank</th>
                            <th>No. of days attended</th>
                            <th>No of leaves</th>
                            <th>Salary</th>
                            <th>Extra</th>
                            <th>Deduction</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                       
                        <tr>
                            <th scope="row">1</th>
                            <td>January</td>
                            <td>124365476</td>
                            <td>xxxx</td>
                            <td>20</td>
                            <td>4</td>
                            <td>60000</td>
                            <td>1000</td>
                            <td>2000</td>
                            <td><h5><b>58000</b></h5></td>
                            <td><h5><b>paid</b></h5></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
			    <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                           <tr>
                            <th scope="row">6</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                             <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>

                

                
                
            </div>
        );

        
    }
}

export default Salary;