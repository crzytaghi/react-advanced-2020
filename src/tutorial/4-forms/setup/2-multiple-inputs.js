import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');

  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });

  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    // since the handleChange function was added as an onChange value, we are able to access the name and value of every input
    const name = event.target.name; // reference the name attribute on the input
    const value = event.target.value;
    // The setPerson function takes the person object, and injects the [name] or key and adds the value that the use inputs. When the user is in the Name input box that will be referenced and whatever they enter into the input box will be added as the value and the person object will be updated on change or when a key is entered. The name attribute needs to be the exact same as the name in the input
    setPerson({ ...person, [name]: value }) // spread out the person object and inject the new values into taht object
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (person.firstName && person.email && person.age) {
      // When we create a newPerson, we spread out the person object and also add an id value
      const newPerson = { ...person, id: new Date().getTime().toString() };
      // The newPerson object then gets added to the people array which now has a firstName, email, age, and id value.
      setPeople([...people, newPerson]);
      // Then set the firstName, email, and age input box back to an empty string.
      setPerson({ firstName: '', email: '', age: '' });
    }
  }


  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
