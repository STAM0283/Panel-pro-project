import React, { useState } from "react";
import users from "../data/users";
import { useHistory } from "react-router-dom";
import Accueil from "./Accueil";

let myUser = Object.values(users);
console.log(users);
const SelectionUsers = () => {
  let history = useHistory();

  const [users, setUsers] = useState(myUser);

  // _getUsers().then((response) => {
  //   console.log(response);
  //   setUsers(response)
  // });

  return (
    <div className="select">
      <p>Selectionner un utilisateur</p>

      <select onChange={() => history.push("/accueil")}>
        <option>--Please choose a user--</option>
        {users.map((user) => (
          <option key={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectionUsers;
