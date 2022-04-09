import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import NewUser from './pages/NewUser'
import LoggedInUser from './pages/LoggedInUser'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="createaccount" element={<NewUser />} />
          <Route path={`user/:username`} element={<LoggedInUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
