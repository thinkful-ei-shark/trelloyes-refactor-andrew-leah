import React from "react";
import Card from './Card'
import './list.css'

function  List(props) {
      console.log("list props: ", props)
      const cards = props.cards.map(card=> <Card key={card.id} title={card.title} content={card.content} onDelete={props.onDelete}/>)
    return (
      <section className='List'>
        <header className='List-header'><h2>{props.header}</h2></header>
        <div className="List-cards">{cards}</div>
        <button type="button" className="List-add-button">
              + Add Random Card
            </button>
      </section>
    );
  }


export default List