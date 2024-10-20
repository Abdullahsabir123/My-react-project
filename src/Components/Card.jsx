import React from 'react'

export default function Card(props) {
    return (
        <div>
          <div className="card text-center mt-4" style={{ width: "18rem" }}>
            <img src={props.cardImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.cardTitle}</h5>
              <p className="card-text">{props.cardText}</p>
              <button className="btn btn-primary">
                Go somewhere
              </button>
            </div>
          </div>
        </div>
      );
}

Card.defaultProps = {
    cardTitle: "Card title",
    cardText: "Card text",
    cardImg: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=600",
  };
