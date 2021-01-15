import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  // useEffect hook takes two parameters, a callback function that performs a task, and a dependency in the form of an array. If the dependency is present, it will only activate if the values in the list change. If left blank (,[]) it will only run on page load.

  const [value, setValue] = useState(0)

  // This runs on page load like all useEffect hooks, but also runs after every time value is updated since value is listed as a dependancy by inserting it into the parentheses after the hook. ( [value] )
  useEffect(() => {
    console.log('call use effect');
    if (value >= 1) {
      // Updates the title of the page (on the tab) to display "New Messages" and the {value}
      document.title = `New Messages(${value})`;
    }
  }, [value]); //This states that I want to useEffect hook to run every time the value is updated, i.e. when the user clicks on the button

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
