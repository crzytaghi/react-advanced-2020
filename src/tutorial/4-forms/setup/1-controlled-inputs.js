import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Only add the item to the people array if both of the values are true.
    if (firstName && email) {
      // You can add/create objects in ES6 as long as the values match the state values created. In this instead of writing {firstName: firstName, email: email}, you can write it like below.
      // new Date().getTime().toString() retreives the date at the exact time the person is created and converts the value into the string, essentially giving you a unique id value to use as the key.
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      // we setPeople to a callback function that takes people as a parameter which is the current value in the state, returns the values we have in the array and passes in the new person object into that array. Then clear the inputs by setting the setFirstName and setEmail to empty strings.
      setPeople((people) => {
        return [...people, person]
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          {/* You can reference a function in the onChange handler or run an inline function */}
          <input type="text" name="firstName" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <input type="submit" value="Add Person" />
      </form>
      {/* we map through the new people array and display the firstName and email that the user entered. */}
      {people.map((person) => {
        const { id, firstName, email } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </article>
  )
};

export default ControlledInputs;
