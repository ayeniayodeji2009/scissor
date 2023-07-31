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
            <div className="hero_2">
                <div className="hero_2_child_1" ><h1>One Stop.<br />Four <span>Possibilities</span>.</h1></div>
                <div className="hero_2_child_2">
                    <div>
                        <h2>3M</h2>
                        <p>Active users</p>
                    </div>
                    <div>
                        <h2>60M</h2>
                        <p>Links and QR<br />
                        Code created</p>
                    </div>
                    <div>
                        <h2>1B</h2>
                        <p>Clicked and Scanned<br />
                        connections</p>
                    </div>
                    <div>
                        <h2>300K</h2>
                        <p>App integrations</p>
                    </div>
                </div>
            </div>
            <div className="hero_2">
                <div className="hero_2_child_1" >
                <h1>| Why choose <span>Scissor</span>.</h1>
                <p>Scissor is the hub of everything that has to do<br />
                    with your links management. We shorten your URLs,<br />
                    allow you creating custom one for your personal<br />
                    business, event usage. Our swift QR code<br />
                    creation, management and usage tracking with<br />
                    advance analytics for all of these is second to<br />
                    none.
                </p>
                </div>
                <div className="hero_2_child_2" id="hero_2_child_2_section_2_body">
                    <div className="hero_2_child_2_inner"> 
                    <div>
                        <img src="https://www.joomconnect.com/images/00-Service_Icons/Square/url-shortener_crop.png" alt="hero_icon" className="" width="35%" />
                        <h2>URL shortening</h2>
                        <p>Scissor allows you to shorten URLs of your<br />
                           business, events. Shorten your URL at scale,<br />
                           URL redirects.
                        </p>
                    </div>
                    <div>
                        <img src="https://th.bing.com/th/id/R.6f6a0f948b53ad72939d8745257105ec?rik=q3BlHUlJnssbDw&riu=http%3a%2f%2ffiles.softicons.com%2fdownload%2fsystem-icons%2fdelta-icons-by-aroche%2fpng%2f256%2fFile+URL.png&ehk=qewQuoHuDLs42HU2E3vs2dq%2bVQSU5Kuib0lBkk3jV3o%3d&risl=&pid=ImgRaw&r=0" alt="hero_icon" className="" width="25%" />
                        <br />
                        <br />
                        <h2>Custom URLs</h2>
                        <p>With Scissor, you can create custom URLs,<br />
                           with the length you want!. A solution for socials<br />
                           and business.
                        </p>
                    </div>
                    </div>
                    <div className="hero_2_child_2_inner">
                    <div>
                        <img src="https://i.pinimg.com/originals/a3/cc/4b/a3cc4b8b1e3e600d0b8eb8642161e48b.png" alt="hero_icon" className="" width="20%" />
                        <h2>QR Codes</h2>
                        <p>Generate QR codes to your business, events.<br />
                            Bring your audience and customers to your<br />
                            doorstep with this scan and go solution.    
                        </p>
                    </div>
                    <div>
                        <img src="https://www.evalea.de/wp-content/uploads/2014/11/Image-257545-analytics-bar-chart-charts-diagram-economics-econo.png" alt="hero_icon" className="" width="20%" />
                        <h2>Data Analytics</h2>
                        <p>Recieve data on the usage of either your<br />
                            shortened URL, custom URLs or generated QR<br />
                            codes. Embedded to monitor progress.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                    <h1>| A <span>price perfect</span> for your needs.</h1>
                    <p>From catering for your personal,business, event, social needs, you can be<br />
                    rest assured we have you in mind in our pricing.</p>
                    <div className="price__parent">
                        <div className="price__child">
                            <h3>Basic</h3>
                            <h1>Free</h1>
                            <h5>Free plan for all users</h5>
                            <p>- Unlimited URL shortening</p>
                            <p>- Basic Link Analytics</p>
                            <p>- Customizable Short Links</p>
                            <p>- Standard Support</p>
                            <p>- Ad-support</p>
                        </div>
                        <div className="price__child_special">
                            <h3>Professional</h3>
                            <h1>$15/month</h1>
                            <h5>Ideal for business creators</h5>
                            <p>- Enhanced Link Analytics</p>
                            <p>- Custom Branded Domains</p>
                            <p>- Advanced Link Customization</p>
                            <p>- Priority Support</p>
                            <p>- Ad-support</p>
                        </div>
                        <div className="price__child">
                            <h3>Teams</h3>
                            <h1>$25/month</h1>
                            <h5>Share with up to 10 users</h5>
                            <p>- Team Collaboration</p>
                            <p>- User Roles and Permissions</p>
                            <p>- Enhanced Security</p>
                            <p>- API Access</p>
                            <p>- A Dedicated Account Manager</p>
                        </div>
                    </div>
                    <div className="price__btn_container">
                    <button className="price__btn">Get Custom Pricing</button>
                    <button className="price__btn">Select Pricing</button>
                    </div>
                </div>
            
        </div>
    )
}

export default Home;