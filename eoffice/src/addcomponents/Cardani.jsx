import React from "react";
import './Cardani.css';
import COVER_IMAGE from "../assets/1.jpg";

const Cardani = () => {
  return (
    <div className="card-container">
      <div className="popup-card">
        <img src={COVER_IMAGE} alt="Dr. Mohan Yadav" className="card-image" />
        <h2>Dr. Mohan Yadav</h2>
        <p>"Indore is the pride of our state and your contribution to its development is incomparable."</p>
        <p><strong>Chief Minister, Govt. of Madhya Pradesh</strong></p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};
export default Cardani;