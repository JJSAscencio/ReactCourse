import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersLists from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: userAge, id: Math.random().toString() }] // setUserList depends on prevUserList, by doing this we add previous users list and new element
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersLists users={usersList} />
    </div>
  );
}

export default App;
