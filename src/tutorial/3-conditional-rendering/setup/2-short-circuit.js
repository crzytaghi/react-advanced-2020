import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');

  const [isError, setIsError] = useState(false); // Use is for boolean values

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <div>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>Toggle Error</button>
      {/* Using the && operator and short circuit operator, if the initial value is true, it will return the second value. If the initial value is false it won't return anything */}
      {isError && <h1>Error..</h1>}
      {/* ternary operator */}
      {isError ? <p>there is an error...</p> :
        <div>
          <h2>there is NO error</h2>
        </div>
      }
    </div>
  )
};

export default ShortCircuit;
