import React from 'react';
import './studyMaterialFaculty.css';
import { Card, CardTitle, CardBody } from 'reactstrap';
import SimpleReactFileUpload from './chooseFile';

class StudyMaterialFaculty extends React.Component{
    render(){
        return (
      <div>
          <br/><br/><br/>
            <Card>

                <CardTitle><h2 className="text-center">STUDY MATERIALS</h2></CardTitle>
                    <br/><br/>
                
                <CardBody style={{marginLeft:"5%",marginRight:"5%"}}>  
	                <form className="form-group">  
                    <div>
		                <label style={{width:"50%"}}>Subject :</label>
                        <label>Concept :</label>
                    </div>
                    
                    <div style={{width:"100%"}}>    
                        <input style={{width:"45%"}} className="form-control" type="text" name="roll" placeholder="Name of subject" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input style={{width:"45%"}} className="form-control" type="text" name="roll" placeholder="Concept" />
                    </div>                   
                    <br/>

                    <div>
		                <label style={{width:"50%"}}>Class :</label>
                        <label>Section :</label>
                    </div>
                    
                    <div style={{width:"100%"}}>    
                        <input style={{width:"45%"}} className="form-control" type="text" name="roll" placeholder="Class" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input style={{width:"45%"}} className="form-control" type="text" name="roll" placeholder="Section" />
                    </div>                   
                    <br/>

                    
                    <div>
                        <label>Choose a file :</label>
                        <SimpleReactFileUpload/>
                    </div>

		            <div className='SubmitButton'>
			            <button className="btn btn-primary">Submit</button>
		            </div>
                    </form>
                </CardBody>
          
            </Card>
           
        </div> 
        )
    };
};
export default  StudyMaterialFaculty; 