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
            <section className="home__hero">
                <div className="home__heroText_heading">
                    <h1>Optimize Your Online Experience with Our <br /> 
                    Advanced <span className="blue_heading">URL Shortening</span> Solution</h1>
                </div>
                <div className="home__heroText_paragragh">
                    <p>Personalize your shortened URLs to align with your brand identity. Utility custom slugs, <br />
                       branded links, and domain customization options to reinforce your brand presence and <br />
                        enhance user engagement.</p>
                </div>

               <div className="home__heroBtns">
                    <a href="/register" className="home__heroBtns_btn">Sign Up</a>
                    <a href="/about_us" className="">Learn more</a>
                </div>
            </section>
            <img src="../scissor_homepage_image_1.png" alt="hero" className="home__heroImg" />
        </div>
    )
}

export default Home;