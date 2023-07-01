import React, { useState } from 'react';
import { db } from '../engine/firebase';
//import { v4 as uuidv4 } from 'uuid';
import { customAlphabet } from "nanoid";
import QRCode from 'qrcode.react';
import './MainApp.css';
//import { useAuthState } from "react-firebase-hooks/auth";
//import { trackUrl, /* analytics */ } from "./firebase02";

function MainApp(props) {
  const [url, setUrl] = useState('');
  const [customDomain, setCustomDomain] = useState(''); //this will be the brand name of the user
  const [qrCode, setQrCode] = useState(''); //this will be the qr code of the shortened url


  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz9876543210", 3); // nanoid() code generated to be 3 characters long for the url

  const date = new Date();
  const [month, day, year] = [date.getDate(), date.getMonth(), date.getFullYear()];// [0, 17, 2000] as month are 0-indexed
  // 24 hour format
  //const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];// [16, 45, 30] output will be ${hour}:${minutes}:${seconds}
  // 12 hour format
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
   });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let hostDomainName =   window.location.origin//for js or for react router to be `${window.location.protocol}//${window.location.hostname}:${window.location.port}` //this gets the domain name or localhost:3000 port
    
    let code //= nanoid()//uuidv4();

    customDomain === "" ? code = nanoid() : code = customDomain; //if the user does not enter a brand name, the code will be generated randomly else the code will be the brand name

    let currentUser = props.passUser; // 1st pass within app

    //let shortURL = `${hostDomainName}/${currentUser}/${code}`;
    

    await db.collection('urls').add({
      //shortenedURL: shortURL,
      url: url,
      customDomain: customDomain,
      currentUser: props.passUser, // 2nd pass going to Database
      code: code,
      time_and_date_of_creation: `DATE:- ${month}/${day}/${year}   ;  TIME:- ${time}`,
     /* length: Math.random().toString(36).slice(-5), */
    });

   // trackUrl(`${hostDomainName}/${currentUser}/${code}`); // 3rd pass going to Analytics
    //analytics(`${hostDomainName}/${currentUser}/${code}`); // 4th pass going to Analytics
    console.log("Hiiiiiiiii "+qrCode)
    setQrCode(`${hostDomainName}/${currentUser}/${code}`)
    alert(`This is your Shortened URL - ${hostDomainName}/${currentUser}/${code}. Click "OK" to see QR Code of the URL.`);
  };




  return (
    <div className="Home">
      <h1>URL Shortner</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={url} onChange={e => setUrl(e.target.value) }
          placeholder="Enter your long URL here....." 
          />
          <br />
        <input type="text" value={customDomain} onChange={e => setCustomDomain(e.target.value) }
          placeholder="Enter your brand name here....." 
          />

          

        <button type="submit">Click to Shorten your URL</button>
        <br />
        <QRCode value={qrCode} />
      </form>
    </div>
  );
}

export default MainApp;


// {
//   if ( e.target.value === "" || e.target.value.length < -1 ) {
//     console.log("Check input = "+ e)
//     alert("Please enter a valid URL")
// } else {
//     console.log("Check input = "+ e)
//   setUrl(e.target.value)
// } }

//Note: without https:// or http:// before domain name in input field, the url will not work.