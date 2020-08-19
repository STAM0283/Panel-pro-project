import React from 'react';
import {useHistory} from "react-router-dom"; 

const LeaderBoard = () => {
    let history = useHistory()
    return (
        <div>
            <button onClick={() => history.push('/')}>Retour à la selection des utilisateurs</button>
        </div>
    );
};

export default LeaderBoard;