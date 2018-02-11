import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import logo from './logo.svg';
import NavBar from './components/NavBar'
import DeckContainer from './components/DeckContainer'
import MyDeck from './components/MyDeck'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/allcards" render={DeckContainer} />
          <Route exact path="/mycards" render={MyDeck} />
        </div>
      </Router>

    );
  }
}

export default App;
