import React,{Component,useState} from 'react';
import {Table,Button,Card,CardHeader,CardBody,CardTitle,Modal,ModalBody,ModalFooter} from 'reactstrap';
import Create from "./Modal"
import './Assignment.css'

class Assignment extends Component{

  constructor(props){
    super(props);
    this.state={
      delete: false
    }
  }

toggle(){
  this.setState({delete:!this.state.delete})
}
  render(){
    return(
        <div className="body">

                <Card>
                  <CardHeader className="cardheader1">
            <CardTitle><h2 className="h2"><b>Assignment</b></h2></CardTitle></CardHeader>
           <CardBody>
             
              
             <CardTitle>
               <div class="row">
             <div class="col">
               <h5>List of Classes</h5> 
               </div>
               <div class="col">
              <Create />
          
               </div>
               </div>
               </CardTitle>
             
     <Table className="table1" >
      <thead className="thead">
        <tr>
          <th>Sno</th>
          <th>Class</th>
          <th>Subject</th>
          <th>Topic</th>
          <th></th>
          <th></th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Computer Science : 8B</td>
          <td>Data Mining</td>
          <td>Module1</td>
          <td><Button color="success">View Submissions</Button></td>
          <td><Button color="warning">Edit</Button></td>
          <td><Button color="danger">Delete</Button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Computer Science : 8A</td>
          <td>Data Mining</td>
          <td>Module2</td>
          <td><Button color="success">View Submissions</Button></td>
          <td><Button color="warning">Edit</Button></td>
          <td><Button color="danger" onClick={() => this.toggle()}>Delete</Button></td>
          <Modal isOpen={this.state.delete}>
            <ModalBody>Are you sure you want to delete?</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.toggle()} >Confirm</Button>
              <Button color="secondary" onClick={() => this.toggle()} toggle={this.state.delete}>Cancel</Button>
            </ModalFooter>
            </Modal> 
          
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Computer Science : 6A</td>
          <td>Operating System</td>
          <td>Banker's Algorithm</td>
          <td><Button color="success">View Submissions</Button></td>
          <td><Button color="warning">Edit</Button></td>
          <td><Button color="danger">Delete</Button></td>
          
        </tr>
      </tbody>
    </Table>
    </CardBody>
    </Card>
    </div>
   
    

      )
  }
}

    

export default Assignment;