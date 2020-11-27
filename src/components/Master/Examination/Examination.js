// Install Bootstrap Using --> npm install bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// then add this path in app.js to use bootstrap

import React, { Component } from 'react'
import ExamList from './ExamList'
import MarksRegister from './MarksRegister'
import GradeList from './GradeList'
import './Examination_Details.css'


export default class Examination extends Component {
    constructor(props) {
        super(props)
        this.state = {
             addExamList : false,
             addMarksRegister: false,
             addGradeList:false
        }
    }
    render() {

        let addExamList=() => this.setState({addExamList : false})
        let addMarksRegister=() => this.setState({addMarksRegister : false})
        let addGradeList=() => this.setState({addGradeList : false})

        return (
            <div>
                <h1 className="mt-5 Heading">Examination </h1>
                
                <button className="btn btn-success my-3 mx-2 w-25 p-3 mt-5" onClick={() =>
                this.setState({addExamList:true})}><strong>Exam List</strong></button>
                <button className="btn btn-primary my-3 mx-2 w-25 p-3 mt-5"onClick={() =>
                this.setState({addMarksRegister:true})}><strong>Marks Register</strong></button>
                <button className="btn btn-danger my-3 mx-2 w-25 p-3 mt-5" onClick={() =>
                this.setState({addGradeList:true})}><strong>Grade List</strong></button>
                <ExamList 
                show={this.state.addExamList}
                onHide={addExamList} />
                <MarksRegister show={this.state.addMarksRegister}
                onHide={addMarksRegister} />
                <GradeList
                show={this.state.addGradeList}
                onHide={addGradeList}
                />
            </div>
        )
    }
}
