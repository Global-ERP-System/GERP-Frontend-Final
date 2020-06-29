import React,{Component} from 'react';
import { Card,CardTitle,CardText,CardBody,CardHeader,CardFooter,ButtonToolbar,Button } from 'reactstrap';
import { Table } from 'reactstrap';
import "./tt.css"

class Timetable extends Component{
  render(){


  return (
  <div className="container">
  <Card className="text-center">  
       <CardHeader className="card-header">
          <CardTitle className="card-title"><h3>TIME TABLE</h3></CardTitle>
       </CardHeader>     
       <CardBody>
         <CardText>
          <Table responsive size="sm" hover bordered>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">7:30 - 8:30</th>
                <th scope="col">8:30 - 9:30</th>
                <th scope="col">9:30 - 10:30</th>
                <th scope="col">Break</th>
                <th scope="col">11:00 - 11:50</th>
                <th scope="col">11:50 - 12:40</th>
                <th scope="col">12:40 - 1:30</th>
                <th scope="col">Lunch</th>
                <th scope="col">2:30 - 3:30</th>
                <th scope="col">3:30 - 4:30</th>
                <th scope="col">4:30 - 5:30</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Monday</th>
                <td>CS5B DBMS</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>CS5B DBMS</td>
                <td></td>
                <td></td>
                <td></td>
                <td>CS5B DBMS</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Tuesday</th>
                <td></td>
                <td></td>
                <td>CS5A SE</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>CS5A SE</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Wednesday</th>
                <td>CS5B DBMS</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>CS5B DBMS</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Thursday</th>
                <td ></td>
                <td></td>
                <td></td>
                <td>CS5A SE</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>CS5A SE</td>
                <td></td>
                <td>CS5A SE</td>
              </tr>
              <tr>
                <th scope="row">Friday</th>
                <td >Larry</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">Saturday</th>
                <td>CS5B DBMS </td>
                <td></td>
                <td>CS5B DBMS</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>CS5B DBMS</td>
                <td></td>
              </tr>
            </tbody>
       </Table>
       </CardText>
    </CardBody>
    </Card>
    </div>
  );
}
}


export default Timetable;