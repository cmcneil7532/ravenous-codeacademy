import React from "react";
import "./Buisness.css";

class Buisness extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img
            src="https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg"
            alt=""
          />
        </div>
        <h2>{this.props.buisness.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.buisness.address}</p>
            <p>{this.props.buisness.city}</p>
            <p>{this.props.buisness.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.buisness.category}</h3>
            <h3 className="rating">{this.props.buisness.rating}</h3>
            <p>{this.props.buisness.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Buisness;
