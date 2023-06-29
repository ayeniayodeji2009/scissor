import React from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.css';
import Navigation from './Navigation';


function Home() {
    return (
        <div className="home">
            <h1>Hello Scissor Home</h1>
            <p>I am the landing page</p>
            <Navigation />
        </div>
    )
}

export default Home;