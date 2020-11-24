import React, { Component,useState} from 'react';
import {Table,Button,Card,CardHeader,CardBody,CardTitle,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import "./AttendenceF.css";
import Create from "./Modal"
import Mark from "./MarkAttendence"
import Extra from "./Extralectures"
import View from "./Viewstudents"

class Attendence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false
        }
    }
    toggle() {
        this.ListeningStateChangedEvent({
            delete: !this.state.delete
        })
    }
    render() {
       

        return (
         <div>
           <div className = "body">
            <Card>
            <CardHeader className = "cardheader1">
            <CardTitle> < h2 className = "h2" > <b> Student Attendence </b></h2 > </CardTitle></CardHeader>
            <CardBody>
            <CardTitle>
            <div class = "row">
            <div class = "col">
            <h5> List of Classes </h5>
            </div> 
             <div class="col">
              <Create/>
          
               </div>
            </div>  
           </CardTitle>
            <Table className="table1">
            <thead className="thead">
            <tr>
            <th> Sno </th> 
            <th> Class </th> 
            <th> Course </th> 
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>

            </tr> 
            </thead> 
            <tbody>
            <tr>
            <th scope = "row"> 1 </th> 
            <td> Computer Science: 8 B </td>
            <td> Data Mining </td>  
            <td> <Mark/></td>
            <td> <Extra/></td>
            <td> <View/> </td>
            </tr> 
            <tr >
            <th scope = "row" > 2 </th> 
            <td> Computer Science: 8 B </td>
            <td> Data Mining </td>  
            <td> <Mark/></td>
            <td> <Extra/></td>
            <td> <View/> </td>
            </tr> 
            <tr>
            <th scope = "row" > 3 </th> 
            <td> Computer Science: 8C </td>
            <td> Compiler Design </td>  
            <td> <Mark/></td>
            <td> <Extra/></td>
            <td> <View/> </td>
            </tr> 
            <tr >
            <th scope = "row" > 4 </th> 
            <td> Computer Science: 8C</td>
            <td> Data Mining </td>  
            <td> <Mark/></td>
            <td> <Extra/></td>
            <td> <View/> </td>
            </tr> 
            
            </tbody> 
            </Table> 
            </CardBody>
            </Card> 
            </div>

            </div>

        );
    }
}

export default Attendence;