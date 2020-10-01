import React from "react";
import Card from "./Card";
import List from "./List";
import store from "./STORE";
import "./app.css";


function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends React.Component {
  
    state = { store: store,
    string: "string" };
    //console.log("the state : ",this.state);
  
    handleDeleteItem = (cardId) =>{
    console.log("state: ",this.state)
    console.log("delete button clicked on: ", cardId)
    //go through each list and remove the card matching card ID from the store in state
    const {lists, allCards} = this.state.store //destructure store into 2 variables 
    const newLists = lists.map(list=> ({
      ...list, 
      cardIds: list.cardIds.filter(id=> id!==cardId)
      })) //mapping over the new var lists, to create an array of appropriate card ids? 
      const newCards= omit(allCards,cardId) //set variable newCards = to the allCards array, but without the deleted card

      this.setState({
        store:{
          lists: newLists,
          allCards:newCards
        }
      })
    }
  
handleAddItem=(listId)=>{
  


  const newItem = newRandomCard() //creates new item
  const newItemId= newItem.id //gets new item id
  const newAllCards= {...this.state.store.allCards} //creates copy of allcards
  newAllCards[newItemId]=newItem //adds new item to all cards with key=id value=newitem
  


  const newLists= this.state.store.lists.map(list=>{
    if(list.id ===listId){
      return {
        ...list,
        cardIds:[...list.cardIds, newItem.id]
      }
    }
    return list
  })
 






  this.setState({
    store:{
      lists: newLists,
      allCards: newAllCards
    }
  })
  //console.log("state after: ", this.state)
  console.log("allcards after: ", this.state.store.allCards)
}



  render() {
    const lists = this.state.store.lists.map((list) => {
      const cards = list.cardIds.map(
        (card) => this.state.store.allCards[card]
      );
      console.log("this is the props of list", list.props)
      return (
        <List  onRandomItem={this.handleAddItem} key={list.id} id={list.id} header={list.header} cards={cards} cardIds={list.cardIds} onDelete={this.handleDeleteItem} />
        
      );
    });
    console.log("this is the lists", lists);
    console.log("this is the state after: ", this.state)
    
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
