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
    topScore: 0
  }

  render() {
    return (
      <div>
        <Navbar color="indigo" dark>
          <Container>
            <NavbarBrand href="/">
              Memory Game!
            </NavbarBrand>
            <h2>Score: 0 | Top Score: 0</h2>
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
              />
            ))}
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
