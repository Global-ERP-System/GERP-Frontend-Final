import React,{Component} from 'react';
import {Navbar} from 'reactstrap'
import "./footer.css"
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import RaiseReq from "../Student/Research/Research"
import AddResearch from "../Student/Research/AddResearch"


class Footer extends Component{
  constructor(props){
    super(props)
    this.state={
      addResearchPaper:false
    }
  }
  render(){
    let addResearchPaper=() => this.setState({addResearchPaper : false})
    return(
      <Router>
<Navbar className="navbar1" >
  <Link className="link" to="/communityf">Home</Link>
  <Link className="link" to="#">Communications</Link>
  <Link className="link" to="#">Search</Link>
  <Link className="link" to="/attendencef">Attendance</Link>
</Navbar>
<Route path="/RaiseReqModel" component={RaiseReq} />
</Router>
    )
  }
}

export default Footer;