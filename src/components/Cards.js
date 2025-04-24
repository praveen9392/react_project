import { useState } from "react";
import "./Cards.css";

export function Card({item}) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={item.imageUrl} alt="NotFound" />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text"><b>Price:</b> {item.price}</p>
                <div className="color-buttons" id="colorbuttons">
                    <p className="card-text"><b>Colors:  </b>
                        <button className="btn btn-secondary"></button>
                        <button className="btn btn-white"></button>
                        <button className="btn btn-danger"></button>
                    </p>
                </div>
                <a href={item.link} target="_blank" className="btn btn-primary">Know More</a>
                <button className="btn btn-success" id="buy">Buy Now</button><br />
            </div>
        </div>
    );
}

