import React from "react";
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.cardImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardText}</p>
          <Link to="/" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
}

Cards.defaultProps = {
  cardTitle: "Card title",
  cardText: "Card text",
  cardImg: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=600",
};
