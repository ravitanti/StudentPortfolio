
import './App.css';
import Homepage from "./Components/homepage/homepage"
import Login from "./Components/login/login"
import Register from "./Components/register/register"
//import Profile from './Components/Profile';
import ViewStudentProfile from "./Components/StudentProfile/ViewStudentProfile"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from 'react'

function App() {
const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes> 
          {/* <Route exact path = '/' element = { 
            user && user.password ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser = {setLoginUser}/>
          }/> */}
          <Route  path = '/homepage' element = { <Homepage setLoginUser={setLoginUser}/>} />
          <Route exact path="/" element={<Login setLoginUser={setLoginUser} />} />
          <Route path = '/register' element={<Register/>} />
          {/* <Route path = '/profile' element={<Profile/>} /> */}
          <Route path = '/ViewStudentProfile/user1@gmail.com' element = {<ViewStudentProfile setLoginUser={setLoginUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
