import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPlayer from './AddPlayer';

it('renders without crashing', () => {
  shallow(<AddPlayer />);
});

it('should call onPlayerAdd on add button', () => {
const mockedOnPlayerAdd = jest.fn();
const addPlayerComponent = mount(<AddPlayer onPlayerAdd={mockedOnPlayerAdd} />);

const nameInput = addPlayerComponent.find('input').first().getDOMNode(); //getDOMNode działa tylko w trybie mount
nameInput.value = 'Anna';

const form = addPlayerComponent.find('form');
form.simulate('submit');

console.log(addPlayerComponent.debug());

expect(mockedOnPlayerAdd).toBeCalledWith('Anna');

});
