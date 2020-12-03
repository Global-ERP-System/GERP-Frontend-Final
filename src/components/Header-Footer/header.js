import React, { Component } from "react";
import Toolbar from "../Header-Footer/Toolbar/Toolbar";
import SideDrawer from "../Header-Footer/SideDrawer/SideDrawer";
import Backdrop from "../Header-Footer/Backdrop/Backdrop";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          clickFunc={this.props.clickFunc}
        />
        {this.state.sideDrawerOpen && (
          <SideDrawer
            show={this.state.sideDrawerOpen}
            hide={this.backdropClickHandler}
          />
        )}
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <p></p>
        </main>
      </div>
    );
  }
}

export default Header;
