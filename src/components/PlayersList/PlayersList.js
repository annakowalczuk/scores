import React from 'react';
import Player from '../Player/Player';
import './PlayersList.scss';

const PlayersList = (props) => {
  return (
    <ul className="PlayersList">
      <Player
        key='0000'
        name='Name'
        score='Score'
      />
      {props.players.map( (item, index) => 
      <Player
        key={index}
        name={item.name}
        score={item.score}
        onPlayerScoreChange={(points) => props.onScoreUpdate(index, points)}
      />)}
    </ul>
  );
};

export default PlayersList;
