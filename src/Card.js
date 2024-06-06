import React from "react";
import "./Card.css";
const Card=({id,name,profession})=>{
    return (<div className="card">
        <div>
            <img className="img" src={`https://robohash.org/${id}?250x250`} alt="pic" />
        </div>
        <div className="data">
        <p className="text">{name}</p>
        <p className="text">{profession}</p>
        </div>
        
    </div>)
}

export default Card;