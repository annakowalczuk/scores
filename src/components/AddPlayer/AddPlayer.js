import React from 'react';
import './AddPlayer.scss';


const AddPlayer = (props) => {
  let input;

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.value) {props.onPlayerAdd(input.value);};
    input.value = '';
  }

  return (
    <form className="AddPlayer" onSubmit={onSubmit}>
      <input type="text" className="AddPlayer__input" ref={node => input = node} />
      <button type="submit" className="AddPlayer__submit" value="Add">Add</button>
    </form>
  );
}

export default AddPlayer;
