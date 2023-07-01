import React from 'react';
import Helmet from 'react-helmet'; //SEO
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.css';
import Navigation from './Navigation';


function Home() {
    return (
        <div className="home">
        <Helmet>
          <title>Scissor</title>
          <meta
          name="description"
          content="Shorten your long links with Scissor today."
        />
        <meta
          name="keywords"
          content="easy, today, Analytics, Link Analytics, Digital Marketing, URL, URLs, URI, URIs, Shorten URL, Shorten URI, Shorten Link, Shorten Links, Shorten URLs, Shorten URIs, Short"
        />
        </Helmet>
            <Navigation />
            <h1>Hello Scissor Home</h1>
            <p>I am the landing page</p>
            <p>Scissor is a URL shortener that allows you to shorten your long links.</p>
            <h1>Hello Scissor Home</h1>
            <p>I am the landing page</p>
            <p>Scissor is a URL shortener that allows you to shorten your long links.</p>
            <h1>Hello Scissor Home</h1>
            <p>I am the landing page</p>
            <p>Scissor is a URL shortener that allows you to shorten your long links.</p>
            <h1>Hello Scissor Home</h1>
            <p>I am the landing page</p>
            <p>Scissor is a URL shortener that allows you to shorten your long links.</p>

        </div>
    )
}

export default Home;