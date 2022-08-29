import React from "react";
import "./Buisness.css";

class Buisness extends React.Component {
  render() {
    const { buisness } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <img src={buisness.imageSrc} alt="" />
        </div>
        <h2>{buisness.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{buisness.address}</p>
            <p>{buisness.city}</p>
            <p>{buisness.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{buisness.category}</h3>
            <h3 className="rating">{buisness.rating}</h3>
            <p>{buisness.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Buisness;
