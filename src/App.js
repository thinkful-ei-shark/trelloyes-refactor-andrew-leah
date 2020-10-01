import React from "react";
import Card from "./Card";
import List from "./List";
import store from "./STORE";
import "./app.css";

class App extends React.Component {
  
    state = { store: store,
    string: "string" };
    //console.log("the state : ",this.state);
  
    handleDeleteItem = (cardId) =>{
    console.log("state: ",this.state)
    console.log("delete button clicked on: ", cardId)
    //go through each list and remove the card matching card ID from the store in state
    const newLists = this.state.store.lists.map((list)=>{
      list.cardIds.filter((card)=>{
        return card !==cardId
      })})
      this.setState({Store:store.lists = newLists})
    
 
  }
  render() {
    const lists = this.state.store.lists.map((list) => {
      const cards = list.cardIds.map(
        (card) => store.allCards[card]
      );
      return (
        <List key={list.id} header={list.header} cards={cards} onDelete={this.handleDelete}/>
      );
    });
    console.log("this is the lists", lists);
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">{lists}</div>
      </main>
    );
  }
}
export default App;
