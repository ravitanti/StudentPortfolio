import React from "react";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import usericon from "./images/user.png";
import "./CSS/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom"





const Menu = () => {
  const navigate = useNavigate()
    function logOut(e){
        //e.preventDefault();
        localStorage.removeItem("password");
        localStorage.removeItem("username");
        //this.props.history.push(`/`);   
      };
  return (
       
    <div
      className="ui inverted menu"
      
      style={{ paddingTop: "10px", paddingBottom: "10px" , marginTop:'0px',background:'#1569e0'}}
    >
      {/* <div className="ui pointing secondary menu" style={{paddingTop: '10px', paddingBottom: '10px'}}> */}
      <div className="item">
        <h1>StudentPortfolio</h1>
      </div>
      <div className="item">
        <div
          className="ui icon input"
          style={{ marginLeft: "10px", width: "350px" }}
        >
          <input type="text" placeholder="Search" />
          <i aria-hidden="true" className="search icon"></i>
        </div>
      </div>
      <div className="right menu">
        <Link to="/jobs" className="item">
          Jobs
        </Link>
        <Link to="/event" className="item">
          Events
        </Link>
        <Link to="" className="item">
          FAQ
        </Link>
        <Link to="/students" className="item">
          Students
        </Link>
        
        <a
          href="https://www.sjsu.edu/careercenter/"
          target="_blank"
          className="item"
        >
          Career Center
        </a>

        <a className="item">
        <div className="button" onClick = {()  => 
            navigate("/")
         
         }>Logout</div> 
          
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Menu;