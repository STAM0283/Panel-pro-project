import React, { useState, useEffect } from "react";
import users from "../data/users";
import questions from "../data/questions";

let myUser = Object.values(users);
let myQuestions = Object.values(questions);

const Accueil = () => {
  const [users, setUsers] = useState(myUser);
  const [questions, setQuestions] = useState(myQuestions);
  console.log(myQuestions);

  return (
    <div className="acceuil">
      <table>
        <tr>
          <td>Question non répondues</td>
          <td>Questions répondues</td>
        </tr>

        <tr>
          <td>
            {users.map((user) => (
              <p className = "name" key={user.id}>{user.name}{questions.map((question) => (
                <p  className = "question" key={question.id}>Vous preferez ? :<br /><button>Option 1 : {question.optionOne.text}</button><button>Option 2 : {question.optionTwo.text}</button></p>
              ))}  </p>
            ))}
            
                         

            <button style = {{backgroundColor: "blue", color: "wheat", fontSize: "xx-large",fontWeight: "bolder", width: "50%", height: "40px"}}>Voir sondage</button>
          </td>
          <td>
            <p>Question :</p>
            <button style = {{backgroundColor: "blue", color: "wheat", fontSize: "xx-large",fontWeight: "bolder", width: "50%", height: "40px"}}>Voir sondage</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Accueil;
