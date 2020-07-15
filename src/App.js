import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Login from '../src/components/Login';
import './App.css';
import MainComponent from './components/MainComponent';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
        loggedin: null
    }
}


  render(){
  return (
  	<BrowserRouter >
    	<MainComponent />   
    </BrowserRouter >

  );
}
}

export default App;
