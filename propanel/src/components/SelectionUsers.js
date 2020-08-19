import React, {useState} from "react";
import users from "../data/users"; 

let myUser = Object.values(users)
console.log(users)
const SelectionUsers = () => {
  const [users, setUsers] = useState(myUser)
  
  // _getUsers().then((response) => {
  //   console.log(response);
  //   setUsers(response)
  // });

  return (
    <div className="select">
    <p>Selectionner un utilisateur</p>
      <select style = {{cursor: "pointer"}} >
        
          {users.map((user) => <option key = {user.id}>{user.name}</option>)}
          
         
      </select> 
       
    </div>
  );
};

export default SelectionUsers;
