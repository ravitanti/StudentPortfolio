import React, { useState} from "react"
import "./register.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import logo1 from './Logo123.png';

const Register = () => {
    const navigate = useNavigate()
    const [ user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        course: "",
        degree:"",
        description: "",
        gpa: "",
        reEnterPassword: "",
        university: "",
        skills:"",
        projects: "",
        work_ex: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })}
    const register = () =>{
        const {name, email, password, reEnterPassword} = user
        if (name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                alert(res.data.message)
                navigate('/')
            })
        }else {
            alert('Invalid Input')
        }}
    return (
    <div className="register">
            <img
            src={logo1} 
            alt="Student portfolio logo"
            />
        <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <input type="text" name="description" value={user.description} placeholder="Description" onChange={ handleChange }></input>
            <input type="text" name="degree" value={user.degree} placeholder="Degree" onChange={ handleChange }></input>
            <input type="text" name="university" value={user.university} placeholder="Your University" onChange={ handleChange }></input>
            <input type="text" name="skills" value={user.skills} placeholder="Your Skills" onChange={ handleChange }></input>
            <input type="text" name="course" value={user.course} placeholder="Courses" onChange={ handleChange }></input>
            <input type="text" name="gpa" value={user.gpa} placeholder="Your GPA" onChange={ handleChange }></input>
            <input type="text" name="projects" value={user.projects} placeholder="Your Projects" onChange={ handleChange }></input>
            <input type="text" name="work_ex" value={user.work_ex} placeholder="Work Experience" onChange={ handleChange }></input>

        <div className="button"onClick = {register} >Register</div>
        <div>or</div>
        <div className="button" onClick={() => navigate('/')}>Login</div>
    </div>
    )
}

export default Register