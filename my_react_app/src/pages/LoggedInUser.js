import logo from '../logo.svg';
import '../App.css';
// import { useState } from 'react';
import { useParams, useLocation } from "react-router-dom";


function LoggedInUser(props) {
    let user = useLocation().state.user
    debugger
    console.log(user)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {JSON.stringify(user)}
            </header>
        </div>
    );
}

export default LoggedInUser;
