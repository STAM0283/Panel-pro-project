import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import SelectionUsers from "./SelectionUsers";
import uuid from "react-uuid";

const AddUser = () => {
  const [addUser, setAddUser] = useState([{ id: 1, name: "arnaud dutrond" }]);
  const myUsers = addUser.map((user) => {
    console.log(myUser);
    return (
      
        <li className="list-group-item" key={user.id}>
          {user.name}
        </li>
    );
  });
  const addNewUser = (newUser) => {
    setAddUser([
      ...addUser,
      {
        id: uuid(),
        name: newUser,
      },
    ]);
  };
  return (
    <div>
      <ul className="list-group">{myUsers}</ul>
      <SelectionUsers addNewUser={addNewUser} />
    </div>
  );
};

export default AddUser;
