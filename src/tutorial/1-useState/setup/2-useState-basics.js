import React, { useState } from 'react';

// all hooks start with use (useState, useEffects, etc.)
// To use hooks, component name must be capitalized
// The hook must be in the function or component body
// useState is a named function and must be in between the curley brackets in the import.

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);

  // useState is a Hook that lets you add React state to function components. You initially set the variable to what you want as default, i.e. 'random title'.
  const [text, setText] = useState('random title')

  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
