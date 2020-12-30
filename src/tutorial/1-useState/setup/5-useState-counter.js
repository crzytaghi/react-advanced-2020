import React, { useState } from 'react';

// You can either run an inline function for the counter or create a function (reset) and edit the values there

const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        console.log(prevState);
        return prevState + 1
      })
    }, 2000)

  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>More Complect Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase in 2 sec</button>
      </section>
    </>
  )
};

export default UseStateCounter;
