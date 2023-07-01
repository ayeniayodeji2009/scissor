import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";


import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
} from "../engine/firebase01";

import { throttle } from 'lodash';

import "./Register.css";



function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const history = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  //throttle is used to prevent the user from clicking the button multiple times
  const throttledNavigateHistory = throttle((path) => {
    //history.replace(path);
    history(path);
}, 1000);

  useEffect(() => {
    if (loading) return;
    if (user) throttledNavigateHistory("/user"); //if user is logged in, redirect to dashboard
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <div className="register">
      <div className="register__container">
      <p>log in with:</p>
        <div className="auth_with_mail">
        <button className="login__btn login__google" onClick={signInWithGoogle}>Google</button>
        <button className="login__btn login__facebook" onClick={signInWithFacebook}>Facebook</button>
        </div>
        <p>-----------------------  or  -----------------------</p>
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="User Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {/* <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Retype Password"
        /> */}
        <p>6 or more characters, one number, one Upper & one Lower case.</p>
        <button className="register__btn" onClick={register}>
          Sign Up with Email
        </button>
        {/* <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button> */}
        <div>
          Already have an account? <Link to="/login">Login</Link> here.
        </div>
      </div>
    </div>
  );
}
export default Register;