import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  // When the window size changes, it invokes the checkSize function with updates the state value of setSize which then triggers a re-render. What the cleanup function does is remove the event listener after each render so that you are constantly invoking the event listener and adding multiple event listeners to the memory.
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });

  console.log('render');

  return (
    <div>
      <h1>window</h1>
      <h2>{size} px</h2>
    </div>
  )
};

export default UseEffectCleanup;
