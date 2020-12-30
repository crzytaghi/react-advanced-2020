import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'random message'
  });
  // console.log(person);

  // You can also set up a state value for each key and update them individually by setting the setName, setAge, or setMessage function to what you want to change the value to
  // const [name, setName] = useState('Peter');
  // const [age, setAge] = useState(24);
  // const [message, setMessage] = useState('Random Message');

  const changeMessage = () => {
    // To edit only the message value, use the spread operator (...) to access the entire object, then specify that you only want to edit the message key value to 'hello world'
    setPerson({ ...person, message: 'Hello World' });
    // setMessage('Hello World');
  }
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>Change Message</button>
    </React.Fragment>
  )
};

export default UseStateObject;
