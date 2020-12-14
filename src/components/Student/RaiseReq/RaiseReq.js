// Install Bootstrap Using --> npm install bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// then add this path in app.js to use bootstrap

import React, { Component } from 'react'
import RaiseReqModel from './RaiseReqModel'
import Certificate from './Certificate'
import Other from './Other'

export default class RaiseReq extends Component {
    constructor(props) {
        super(props)
        this.state = {
             addLeaveApplication : false,
             addCertificate: false,
             addOtherDocument:false
        }
    }
    render() {

        let addLeaveApplication=() => this.setState({addLeaveApplication : false})
        let addCertificate=() => this.setState({addCertificate : false})
        let addOtherDocument=() => this.setState({addOtherDocument : false})

        return (
            <div className='container-md' style={{textAlign: 'center'}}>
                <h1>Raise a Request </h1>
                <button  className="btn btn-primary my-3 mx-2 p-3 w-50"  onClick={() =>
                this.setState({addLeaveApplication:true})}>Leave Application</button><br></br>
                <button  className="btn btn-primary my-3 mx-2 p-3 w-50"onClick={() =>
                this.setState({addCertificate:true})}>Certificate</button><br></br>
                <button  className="btn btn-primary my-3 mx-2 p-3 w-50" onClick={() =>
                this.setState({addOtherDocument:true})}>Other Document</button><br></br>
                <RaiseReqModel 
                show={this.state.addLeaveApplication}
                onHide={addLeaveApplication} />
                <Certificate show={this.state.addCertificate}
                onHide={addCertificate} />
                <Other 
                show={this.state.addOtherDocument}
                onHide={addOtherDocument}
                />
            </div>
        )
    }
}
