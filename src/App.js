import React, {Component} from 'react';
import Login from '../src/components/Login';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
        loggedin: null
    }
}


  render(){
  return (
    <Login />    

  );
}
}

export default App;
