import React, { Component } from 'react'
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
// import { Card, CardTitle, CardText, CardBody, CardHeader, CardFooter, Form, FormGroup, CustomInput, } from 'reactstrap';
import './Account.css'



export default class PieChart extends Component {
	state = {
		dataPie: {
			labels: ["Salary Paid", "Fee Recieved"],
			datasets: [
				{
					data: [60, 40],
					backgroundColor: [
						"#F7464A",
						"#46BFBD"
					],
					hoverBackgroundColor: [
						"#FF5A5E",
						"#5AD3D1"
					]
				}
			]
		}
	}
	render() {
		return (
			<div className="Pie_Chart">
				<MDBContainer>

					<Pie data={this.state.dataPie} options={{ responsive: true,maintainAspectRatio: true
 }} />
				</MDBContainer>
			</div>
		)
	}
}