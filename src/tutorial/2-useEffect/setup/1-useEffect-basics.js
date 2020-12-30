import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0)

  // This runs on page load like all useEffect hooks, but also runs after every time value is updated since value is listed as a dependancy by inserting it into the parentheses after the hook. ( [value] )
  useEffect(() => {
    console.log('call use effect');
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  // Since an empty array was inserted as a dependency, this useEffect hook only runs on page load. ( [] )
  useEffect(() => {
    console.log('hello world');
  }, []);

  console.log('render component');
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>CLick Me</button>
    </div>
  )
};

export default UseEffectBasics;
