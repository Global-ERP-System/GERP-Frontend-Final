import React,{Component} from 'react';
import {Navbar} from 'reactstrap'
import "./footer.css"
import {BrowserRouter as Router,Route } from 'react-router-dom'
import RaiseReq from "../Student/Research/Research"
// import AddResearch from "../Student/Research/AddResearch"


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
  <a className="link" href="/community">Home</a>
  <a className="link" href="#">Communications</a>
  <a className="link" href="#">Search</a>
  <a className="link" href="/attendance">Attendance</a>
</Navbar>
<Route path="/RaiseReqModel" component={RaiseReq} />
</Router>
    )
  }
}

export default Footer;