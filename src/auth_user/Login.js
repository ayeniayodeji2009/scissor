import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../engine/firebase01";
import { useAuthState } from "react-firebase-hooks/auth";
import { throttle } from 'lodash';
import Navigation from "../components/Navigation";
import "./Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();


//throttle is used to prevent the user from clicking the button multiple times
  const throttledNavigate = throttle((path) => {
    //navigate.push(path);
    navigate(path);
}, 1000);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) throttledNavigate("/user");//if user is logged in, redirect to dashboard
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <div className="login">
    <Navigation />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Hello Scissor Login</h1>
      <div className="login__container">
        <input type="text" className="login__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" />
        <input type="password" className="login__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)}>Login</button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>Login with Google</button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default Login;