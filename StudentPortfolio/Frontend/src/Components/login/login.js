import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import logo1 from './Logo123.png';



const Login = ({ setLoginUser}) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const Login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        console.log(res.data.user.rows[0].password)
        if (res.data.user.rows[0].password){
            navigate(`/ViewStudentProfile/${res.data.user.rows[0].email}`)
        } else{
            navigate("/")
        }})}
    return (
        <div className="login">
            <img
            src={logo1} 
            alt="Student portfolio logo"
            />
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={Login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/register')}>Register</div>
        </div>
    )
}

export default Login