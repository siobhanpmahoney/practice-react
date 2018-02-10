import React from 'react'
import logo from './logo.svg';
import './App.css';
import DeckContainer from './components/DeckContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Arkham Mania</h1>
        <div><DeckContainer /></div>

      </div>
    );
  }
}

export default App;
