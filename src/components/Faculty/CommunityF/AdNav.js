import React, { Component } from "react";
export default class AdNav extends Component {
  render() {
    return (
      <div className={`${this.props.className} p-3`} style={this.props.style}>
        <img
          alt="img"
          src="https://dcassetcdn.com/design_img/3361176/175408/175408_18909504_3361176_2e474988_image.png"
          style={{ height: "98%", width: "98%", objectFit: "cover" }}
        />
      </div>
    );
  }
}
