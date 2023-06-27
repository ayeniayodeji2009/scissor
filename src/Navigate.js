import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import Home from "./Home";
import Login from "./auth_user/Login";

function Navigate() {


    return (
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              </ul>
            </nav>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
//   const navigate = useHistory();

//   function homePage() {
//     navigate("/");
//   }

//   function login() {
//     navigate("/login");
//   }

//   return (
//     <div>
//     <button type="button" onClick={homePage}>
//       Go home
//     </button>
//     <button type="button" onClick={login}>
//         Go login
//     </button>
//     </div>
 );
}

export default Navigate;



  