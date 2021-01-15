import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <button className='btn' onClick={() => setShow(!show)}>show/hide</button>
      {show && <Item />} {/* if show is true, it will display the <Item />. If it is false it will display null. */}
    </div>
  )
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    // Utilize the cleanup function to clean the event listener after every re-render.
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, []);

  return <div style={{ marginTop: '2rem' }}>
    <h1>windor</h1>
    <h2>size : {size}px</h2>
  </div>
};

export default ShowHide;
