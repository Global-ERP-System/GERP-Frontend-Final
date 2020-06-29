import React from 'react';
import './studyMaterialFaculty.css';
import { Card } from 'reactstrap';
import SimpleReactFileUpload from './chooseFile';

class StudyMaterialFaculty extends React.Component{
    render(){
        return (
      <div>

            <Card>
                <head>
	                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	                <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script>
	            </head>
                <body>
                	<div className="container">
                	<h1 className='head'>Study Materials</h1><br/><br/>
                    
	                <form className="form-group">  
                    <div className="form-group col-sm-6">
		                <label>Subject :</label>
		                <input className="form-control" type="text" name="roll" placeholder="Name of subject" />
                    </div>
                    <div className="form-group col-sm-6">
		                <label>Concept :</label>
		                <input className="form-control" type="text" name="roll" placeholder="Concept" />
                    </div><br/>
                    <div className="form-group col-sm-6">
                        <label>Class :</label>
		                <input className="form-control" type="text" name="roll" placeholder="Class" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label>Section :</label>
		                <input className="form-control" type="text" name="roll" placeholder="Section" />
                    </div><br/>
                    <div className="form-group col-sm-12">
                        <label>Choose a file :</label>
                        <SimpleReactFileUpload/>
                    </div>

		            <div className='SubmitButton'>
			            <button className="btn btn-primary">Submit</button>
		            </div>
                    </form>
                    </div>
                </body>
            </Card>
           
        </div> 
        )
    };
};
export default  StudyMaterialFaculty; 