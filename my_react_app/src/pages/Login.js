import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

let loginUser = async (username, password) => {
  let response = await axios({
    method: 'post',
    url: `http://localhost:3001/user/login`,
    data: { username, password }
  })
  console.log(response)
  return response
}

function Login() {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [failedLogin, setFailedLogin] = useState(false)
  const navigate = useNavigate();


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        username:
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        password:
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" onClick={async () => {
          let loggedIn = await loginUser(username, password);
          if (loggedIn.status === 200) {
            navigate(`/user/${username}`, { state: { ...loggedIn.data } });
          }
          else {
            setFailedLogin(true)
          }
        }} />
        { failedLogin ? <div>incorrrect username or password</div> : <></>}
        <Link to="/createaccount">Create Account</Link>
      </header>
    </div>
  );
}

export default Login;
