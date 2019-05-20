import React from 'react';
import Player from '../Player/Player';

const PlayersList = (props) => {
  return (
    <ul className="PlayersList">
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
