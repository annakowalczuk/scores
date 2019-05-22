import React from 'react';
import { shallow } from 'enzyme';
import PlayerList from './PlayersList';
import Player from '../Player/Player';

it('renders without crashing', () => {
  shallow(<PlayerList players={[]} />);
});

it('renders correct number of players', () => {

  const players = [
    {
        name: 'Anna',
        score: 5
    },
    {
        name: 'Antoś',
        score: 0
    }
  ]

  const playerComponent = shallow(<PlayerList players={players} />);

  // console.log(playerComponent.debug());

  const expectedPlayersNumber = playerComponent.find(Player).length - 1;
  expect(expectedPlayersNumber).toEqual(2);

});

it('should call onScoreUpdate when onPlayerScoreChange is called', () => {
  const players = [
    {
        name: 'Kunegunda',
        score: 5
    },
    {
        name: 'Antoś',
        score: 0
    }
  ];

  const mockedOnScoreUpdate = jest.fn();
  const playerComponent = shallow(<PlayerList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  const firstPlayer = playerComponent.find(Player).at(1);
  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
  onPlayerScoreChange(10);

  expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});
