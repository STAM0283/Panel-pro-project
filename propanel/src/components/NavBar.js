import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import SelectionUsers from "./SelectionUsers"; 
import Accueil from "./Accueil";
import NouvelleQuestion from "./NouvelleQuestion";
import LeaderBoard from "./LeaderBoard";


const NavBar = () => {
    return (
        
        <Router forceRefresh>
            <div className="navBar">
                <nav>
                    <ul>
                        <li>
                            <NavLink exact activeClassName = "active" to = "/" >
                                <p>SELECTIONER UN UTILISATEUR</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  exact activeClassName = "active" to = "/accueil" >
                                <p>ACCUEIL</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  exact activeClassName = "active" to = "/nouvelle-question">
                                <p>NOUVELLE QUESTION</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName = "active" to = "/leader-board">
                                <p>LEADERBOARD</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path = "/" component = {SelectionUsers} />
                    <Route exact path = "/accueil" component = {Accueil} />
                    <Route exact path = "/nouvelle-question" component = {NouvelleQuestion} />
                    <Route exact path = "/leader-board" component = {LeaderBoard} />
                </Switch>
            </div>
        </Router>
    );
};

export default NavBar;