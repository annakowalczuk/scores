import React from 'react';
import PlayerList from './components/PlayersList/PlayersList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Anna',
          score: 3,
        },
        {
          name: 'Michal',
          score: 2,
        },
        {
          name: 'Rafał',
          score: 1,
        },
      ]
    }
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => 
        index === playerIndex ? { ...player, score: player.score + scoreChange } : player
      )
    });
  }
  
  render(){
    return (
      <div className="App">
        <PlayerList players={this.state.players} onScoreUpdate={this.onScoreUpdate} />
      </div>
    );
  }
}

export default App;
