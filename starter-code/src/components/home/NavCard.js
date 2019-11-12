import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavCard extends Component {
  render() {
    const { link, image, text, title } = this.props;
    return (
      <div className="nav-card">
        <Link to={link}>
          <div>
            <div>
              <img className="cover-image" src={image} alt="" />
            </div>
            <div className="flex-column-center">
              <h1>{title}</h1>
              <p className="nav-card-parag">{text}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default NavCard;
