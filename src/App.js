import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'mdbreact';
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import friends from './friend.json';
import random from './utils/logic';
import { ToastContainer } from "react-toastr";

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    picked: [],
    friends: []
  }

  componentDidMount() {
    this.setState({ friends: friends });
  }

  handleBtnClick = event => {
    const charID = event.target.attributes.getNamedItem("data-value").value;

    this.changeScore(charID);
    this.shuffleCards();
    

  }

  changeScore = charID => {
    const newState = { ...this.state };

    if (newState.picked.includes(charID)) {
      newState.score = 0;
      newState.picked = [];
      this.addAlert('OOPS! Better luck next time!');
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

    this.setState({ 
      score: newState.score, 
      topScore: newState.topScore, 
      picked: newState.picked 
    });
  }

  shuffleCards = () => {

    let friendsArr = friends;
    let newArr = random(friendsArr);
    console.log(newArr);
    this.setState({ friends: newArr });

  }

  addAlert (message) {
    this.refs.container.error(message, '', {
      timeOut: 3000,
      extendedTimeOut: 0,
    });
  }



  render() {
    return (
      <div>
        <ToastContainer ref="container"
                        className="toast-top-center" />
        <Navbar color="indigo" dark sticky='top'>
          <Container>
            <NavbarBrand href="/">
              Memory Game!
            </NavbarBrand>
            <h2 style={{color: 'white'}}>Score: {this.state.score} | Top Score: {this.state.topScore}</h2>
          </Container>
        </Navbar>
        <Jumbotron>
          <h1>Critical Role Memory Game!</h1>
          <p>Click on an Image to earn points, but don't click on the same Image twice!</p>
        </Jumbotron>
        <Container>
          {this.state.friends.map(friend => (
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
