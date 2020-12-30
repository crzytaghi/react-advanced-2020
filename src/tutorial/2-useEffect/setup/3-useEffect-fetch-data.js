import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  }

  // Make sure to add the empty dependency to ensure that you don't run into an infinit loop. This is because useEffect runs on page load, which runs the getUsers function, which then runs the setUsers(users) function which triggers a re-render. 
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
};

export default UseEffectFetchData;
