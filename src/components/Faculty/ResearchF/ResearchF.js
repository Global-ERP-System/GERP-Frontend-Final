// Install Bootstrap Using --> npm install bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// then add this path in app.js to use bootstrap

import React, { Component } from 'react'
import AddResearch from './AddResearchF'


export default class RaiseReq extends Component {
    constructor(props) {
        super(props)
        this.state = {
             addResearchPaper : false
        }
    }
    render() {

        let addResearchPaper=() => this.setState({addResearchPaper : false})

        return (
            <div>
                <h1 style={{textAlign:"center"}}>Research Paper </h1>
                <br/>
                <br/>
                <div style={{textAlign:"center"}}>
                <button className="btn btn-primary my-3 mx-2 w-25 p-3" onClick={() =>
                this.setState({addResearchPaper:true})}>Research Paper</button><br></br>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <AddResearch 
                show={this.state.addResearchPaper}
                onHide={addResearchPaper} />
            </div>
        )
    }
}
