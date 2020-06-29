// Install Bootstrap Using --> npm install bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// then add this path in app.js to use bootstrap

import React, { Component } from 'react'
import RaiseReqModel from './RaiseReqModel'
import Report from './Report'
import Other from './Other'


export default class RaiseReq extends Component {
    constructor(props) {
        super(props)
        this.state = {
             addLeaveApplication : false,
             addReport: false,
             addOtherDocument:false
        }
    }
    render() {

        let addLeaveApplication=() => this.setState({addLeaveApplication : false})
        let addReport=() => this.setState({addReport : false})
        let addOtherDocument=() => this.setState({addOtherDocument : false})

        return (
            <div>
                <h1>Raise a Request </h1>
                <button className="btn btn-primary my-3 mx-2 w-25 p-3" onClick={() =>
                this.setState({addLeaveApplication:true})}>Leave Application</button><br></br>
                <button className="btn btn-primary my-3 mx-2 w-25 p-3"onClick={() =>
                this.setState({addCertificate:true})}>Report</button><br></br>
                <button className="btn btn-primary my-3 mx-2 w-25 p-3" onClick={() =>
                this.setState({addOtherDocument:true})}>Other Document</button><br></br>
                <RaiseReqModel 
                show={this.state.addLeaveApplication}
                onHide={addLeaveApplication} />
                <Report show={this.state.addCertificate}
                onHide={addReport} />
                <Other 
                show={this.state.addOtherDocument}
                onHide={addOtherDocument}
                />
            </div>
        )
    }
}
