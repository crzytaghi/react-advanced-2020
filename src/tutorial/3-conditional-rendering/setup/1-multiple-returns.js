import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  // Initially we fetch the data coming from the url which is an object of the user Quincy Larson. Initially we get the response back from the api and determine what type of response is returned. If the response is between 200 and 299 we return the response then display the users login name, else we throw an error and render the error return. 
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, []);

  // You can set up multiple returns by adding conditional formatting i.e. if/else
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  };

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  if (user) {
    return (
      <div>
        <h1>{user}</h1>
      </div>
    );
  }

};

export default MultipleReturns;
