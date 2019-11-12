import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeButton extends Component {
  render() {
    return (
      <div className="flex-horizontal-center home-button">
        <Link to="/">
          <img
            className="icon"
            src="https://res.cloudinary.com/elwiiman/image/upload/v1573541908/test/homepage_indeod.png"
            alt=""
          />
        </Link>
      </div>
    );
  }
}

export default HomeButton;
