import React from 'react';
import './Player.scss';

const Player = (props) => {
  return (
    <li className="Player">
      <span className="Player__name">{props.name}</span>
      <span className="Player__score">{props.score}</span>
      <span className="Player__button" onClick={ () => props.onPlayerScoreChange(1) }>
        {props.name !== 'Name' ? '+' : null}
      </span>
      <span className="Player__button" onClick={ () => props.onPlayerScoreChange(-1) }>
        {props.name !== 'Name' ? '-' : null}
      </span>
    </li>
  );
};

export default Player;
