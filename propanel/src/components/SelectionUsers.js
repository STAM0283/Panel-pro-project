import React, { useState } from "react";
import users from "../data/users";
import { useHistory } from "react-router-dom";

let myUser = Object.values(users);
console.log(users);
const SelectionUsers = ({ addNewUser }) => {
  let history = useHistory();

  const [users, setUsers] = useState(myUser);
  const [addUsers, setAddUsers] = useState("");

  // const handLeUser = (event) => {
  //   event.preventDefault();
  //   addNewUser(addUsers);
  //   setAddUsers("");
  // };

  // _getUsers().then((response) => {
  //   console.log(response);
  //   setUsers(response)
  // });

  return (
    <div className="select">
      <p>Selectionner un utilisateur</p>
      {/* <form onSubmit={handLeUser}> */}
      <label>Ajouter un utilisateur</label>
        <input style = {{width: "15%", height:"30px", marginRight: "10px"}}
          type="text"
          value={addUsers}
          onChange={(event) => setAddUsers(event.target.value)}
        />
        {/* <input type="submit" /> */}
      {/* </form> */}

      <select onChange={() => history.push("/accueil")}>
        <option>--Please choose a user--</option>
        <option>{addUsers}</option>
        {users.map((user) => (
          <option key={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectionUsers;
