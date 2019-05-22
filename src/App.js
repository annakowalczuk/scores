import React from 'react';
import PlayerList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    }
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => 
        index === playerIndex ? { ...player, score: player.score + scoreChange } : player
      )
    });
  }
  
  onPlayerAdd = (newPlayerName) => {
    this.setState({
      players: this.state.players.concat({
        name: newPlayerName,
        score: 0,
      })
    });
  }

  render(){
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayerList players={this.state.players} onScoreUpdate={this.onScoreUpdate} />
      </div>
    );
  }
}

export default App;
