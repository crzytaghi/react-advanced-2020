import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title'
  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )
};

// This example shows us why we would want to use the useState hook since the title is not changed when we click on the button. useState would essentially rerender the page allowing us to see the title change in real time.

export default ErrorExample;
