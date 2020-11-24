import React,{Component} from 'react';
import Login from "../signin/signin"
import SignUp from "../signup/signup"
import {Navbar,NavbarBrand,ButtonToolbar,Button} from 'reactstrap'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class Navbars extends Component{
   
    onLogIn(){

    }
    render(){
        return(
            <Router>
            <div id="navigationbar">
              <Navbar className="navbar" fixed="top">
                <NavbarBrand href="/"><h3>SheltOwn</h3></NavbarBrand>
                <ButtonToolbar>
                  <Link to ="/signup"><Button style={{marginRight:"4px"}}  className="button"><h3>Sign Up</h3></Button></Link>
                  <Link to ="/signin"><Button  className="button"><h3>Sign In</h3></Button></Link>
                </ButtonToolbar>
              </Navbar>
        
              <Route path="/signin" component={Login} />
              <Route path="/signup" component={SignUp} />
            </div>
            </Router>
        )
    }
}
export default Navbars;