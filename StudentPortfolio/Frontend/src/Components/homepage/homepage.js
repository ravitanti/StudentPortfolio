import React from "react"
import "./homepage.css"
import logo1 from './Logo123.png';

import {useNavigate} from "react-router-dom"

const Homepage = ({setLoginUser}) => {
    const navigate = useNavigate()
    return (
        <div className="homepage">
            <img
            src={logo1} 
            alt="Student portfolio logo"
            />
            <h1>Student Portfolio</h1>
            <div className="button" onClick = {()  => 
            navigate("/") && setLoginUser({})
         
         }>Logout</div>
        </div>
    )
}

export default Homepage