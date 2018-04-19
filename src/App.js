import React, {Component} from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'mdbreact';
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import friends from './friend.json'

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    picked: []
  }

  handleBtnClick = event => {
    const charID = event.target.attributes.getNamedItem("data-value").value;

    const newState = { ...this.state };

    if (newState.picked.includes(charID)) {
      newState.score = 0;
      newState.picked = [];
    } else if (!newState.picked.includes(charID) && newState.picked.length >= newState.topScore) {
      newState.score = newState.score + 1
      newState.topScore = newState.topScore + 1
      newState.picked.push(charID);
      console.log(newState.picked)
    } else {
      newState.score = newState.score + 1
      newState.picked.push(charID);
      console.log(newState.picked)
    }

    this.setState(newState);

  }

  render() {
    return (
      <div>
        <Navbar color="indigo" dark>
          <Container>
            <NavbarBrand href="/">
              Memory Game!
            </NavbarBrand>
            <h2>Score: {this.state.score} | Top Score: {this.state.topScore}</h2>
          </Container>
        </Navbar>
        <Jumbotron>
          <h1>Critical Role Memory Game!</h1>
          <p>Click on an Image to earn points, but don't click on the same Image twice!</p>
        </Jumbotron>
        <Container>
          {friends.map(friend => (
              <CharacterCard
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.photo}
                handleBtnClick={this.handleBtnClick}
              />
            ))}
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
