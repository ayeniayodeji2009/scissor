import React from "react";
import {/*BrowserRouter, Switch, Route,*/ NavLink/*, useNavigate*/} from "react-router-dom";
import { logout } from "../engine/firebase01";
//import { useHistory } from "react-router-dom";
//import Home from "./Home";
//import Login from "../auth_user/Login";
import "./Navigation.css";

//Checks for Current Nav
function currentPageNav(isActive){
  return isActive ? {color: 'white'} : {color: 'black'}
}

function Navigation() {
  //e.preventDefault();


    return (
      <section className="nav_container">
        <div className=".nav_logo">
       {/* <img src="../Openclipart-Scissors-Logo-in-Blue.png" height="25%" width="25%" alt="Scissor Logo" /> */}
        <span id="logo_name"><h1>Scissor</h1></span>
        </div>


    <nav className="nav nav-pills flex-column flex-sm-row">
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link nav-text-color active" aria-current="page" to="/">My URLs</NavLink>
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link nav-text-color" to="/features">Features \/</NavLink>
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link nav-text-color" to="/pricing">Pricing</NavLink>
{/* <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link" to="/UsersTest">Users</NavLink> */}
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link nav-text-color" to="/analytics">Analytics</NavLink>
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link nav-text-color" to="/faqs">FAQs</NavLink>
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link nav-text-color" onClick={logout}>Logout</NavLink> 
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link nav-text-color active" to="/try_for_free">Try for free</NavLink>
     </nav>
      </section>
 );
}

export default Navigation;



  