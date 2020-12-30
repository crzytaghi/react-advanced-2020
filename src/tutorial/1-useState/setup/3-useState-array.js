import React, { useState } from 'react';
import { data } from '../../../data'; // if using the data just once, you can also set the variables = React.useState([]) like on like 7

const UseStateArray = () => {
  // pass in the data array as the default value in the useState hook from the data.js file which contains an array of people.
  const [people, setPeople] = useState(data); // Accessing the data variable from line 2 that we imported.
  // const [people, setPeople] = React.useState([]);
  const clearItems = () => {
    setPeople([]);
  }

  const removeItem = (id) => {
    // Whichever id's are not matching the id of the item that you click on are being passed into the setPeople, which displays the remaining values. Filter allows you filter out all of the items that you don't want, in this case we are filtering out all of the items that are not the id that is being passed. i.e. the remaining id's in the array.
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople)
  }

  return (
    <React.Fragment>
      {
        people.map((person) => {
          // allows us to pull the id and name values out of the person array.
          const { id, name } = person
          return <div key={id} className="item">
            <h4>{name}</h4>
            {/* in order for the removeItem function to not run on page load, you must set up an arrow function since you are passing an argument. */}
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        }
        )
      }
      {/* You can set up an arrow function inside the JSX for the useState hook. The onClick needs to be tied to a button so it is not rendered as soon as the page loads. Both functions below do the exact same thing. */}
      {/* <button className='btn' onClick={() => { setPeople([]) }}>Clear Items</button> */}
      <button className='btn' onClick={clearItems}>Delete Items</button>
    </React.Fragment>
  )
};

export default UseStateArray;
