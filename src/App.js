import React, { Component } from "react";
import "./App.css";

import MainComponent from "./components/MainComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedin: null,
    };
  }

  render() {
    return <MainComponent />;
  }
}

export default App;
