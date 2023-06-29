import React from "react";
import {/*BrowserRouter, Switch, Route,*/ NavLink/*, useNavigate*/} from "react-router-dom";
//import { useHistory } from "react-router-dom";
//import Home from "./Home";
//import Login from "../auth_user/Login";

//Checks for Current Nav
function currentPageNav(isActive){
  return isActive ? {color: 'white'} : {color: 'black'}
}

function Navigation() {
  //e.preventDefault();


    return (
      <section className="nav_container">


<nav className="nav nav-pills flex-column flex-sm-row">
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/">Home</NavLink>
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link" to="/login">Login</NavLink> 
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link" to="/about">About</NavLink>
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link" to="/address">Address</NavLink>
{/* <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link" to="/UsersTest">Users</NavLink> */}
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link" to="/Users">Users</NavLink>
     </nav>


        {/*}
        <nav className="nav">
          <NavLink to="/" className="nav__logo">Scissor</NavLink>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" activeClassName="nav__link--active" end="true">Home</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/login" className="nav__link" activeClassName="nav__link--active">Login</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/register" className="nav__link" activeClassName="nav__link--active">Register</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/reset" className="nav__link" activeClassName="nav__link--active">Reset</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Switch> 
        */}
      </section>
 );
}

export default Navigation;



  