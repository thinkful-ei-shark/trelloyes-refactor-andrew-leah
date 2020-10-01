import React from "react";
import './card.css';

function Card(props){
  
      console.log("props of card:", props)
      return (
    <div className="Card">
      <button type="button" onClick={()=>props.onDelete(props.id)}>delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>);
  }


export default Card