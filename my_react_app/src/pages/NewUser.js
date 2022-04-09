import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';


let createUser = async (username, password, name, phone) => {
    // axios.get(`http://localhost:3001/create/user`, { username, password, name, phone })
    let response = await axios({
        method: 'post',
        url: `http://localhost:3001/create/user`,
        data: { username, password, name, phone }
    })
    debugger
    console.log(response)
}

function CreateAccount() {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [name, setName] = useState('')
    let [phone, setPhone] = useState('')

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                name:
                <input type="text" onChange={(e) => setName(e.target.value)} />
                phone:
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
                username:
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                password:
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Create Account" onClick={() => { createUser(username, password, name, phone) }} />
            </header>
        </div>
    );
}

export default CreateAccount;
