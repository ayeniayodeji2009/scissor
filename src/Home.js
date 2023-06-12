import React, { useState } from 'react';
import { db } from './firebase';
//import { v4 as uuidv4 } from 'uuid';
import { customAlphabet } from "nanoid";
import './Home.css';

function Home() {
  const [url, setUrl] = useState('');


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

    let domainName =   window.location.origin//for js or for react router to be `${window.location.protocol}//${window.location.hostname}:${window.location.port}` //this gets the domain name or localhost:3000 port
    let code = nanoid()//uuidv4();
    await db.collection('urls').add({
      url: url,
      code: code,
      timestamp: `DATE:- ${month}/${day}/${year}   ;  TIME:- ${time}`,
     /* length: Math.random().toString(36).slice(-5), */
    });

    alert(`This is your Shortened URL - ${domainName}/${code}`);
  };


  return (
    <div className="Home">
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={url} onChange={e => setUrl(e.target.value) }
          placeholder="Enter the URL here....." 
          />
        <button type="submit">Shorten the URL</button>
      </form>
    </div>
  );
}

export default Home;


// {
//   if ( e.target.value === "" || e.target.value.length < -1 ) {
//     console.log("Check input = "+ e)
//     alert("Please enter a valid URL")
// } else {
//     console.log("Check input = "+ e)
//   setUrl(e.target.value)
// } }

//Note: without https:// or http:// before domain name in input field, the url will not work.