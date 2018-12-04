import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

var chosen = [];

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };


  // removeFriend = id => {
  //   // Filter this.state.cards for cards with an id not equal to the id being removed
  //   const cards = this.state.cards.filter(friend => friend.id !== id);
  //   // Set this.state.cards equal to the new cards array
  //   this.setState({ cards });
  // };

    select = id => {
      chosen.push('newvalue');
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const cards = this.state.cards.filter(friend => friend.id !== id);
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
  };


  // Map over this.state.cards and render a FriendCard component for each friend object
  render() {
    const shuffledCards = shuffleArray(this.state.cards);
    return (
      <Wrapper>
        <Title>Clicky Game for Android IDs</Title>

        {/* {this.state.cards.map(friend => ( */}
        {shuffledCards.map(friend => (  
          <FriendCard
            select={this.select}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
