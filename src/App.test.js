import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';

// //składnia Jest
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

//składnia Enzyme
it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  
  const appComponent = shallow(<App />);
  let players = [
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
  ];

  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate[0].score).toEqual(8);

});
