import React, { useState } from 'react';
import { db } from '../engine/firebase';
//import { v4 as uuidv4 } from 'uuid';
import { customAlphabet } from "nanoid";
import QRCode from 'qrcode.react';
//import QRious from "qrious";
import './MainApp.css';
//import { useAuthState } from "react-firebase-hooks/auth";
//import { trackUrl, /* analytics */ } from "./firebase02";

function MainApp(props) {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState(''); //this will be the shortened url
  const [customDomain, setCustomDomain] = useState(''); /*this will be the brand name of the user*/
  const [qrCode, setQrCode] = useState(''); //this will be the qr code of the shortened url
  const [hideQRImage, setHideQRImage] = useState(true); //this will hide the qr code image
  const copyState = "Copy";
  const [copyURL, setCopyURL] = useState(copyState);


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
    setShortUrl(`${hostDomainName}/${currentUser}/${code}`); //this will be the shortened url
    setQrCode(shortUrl) //this will be the qr code of the shortened url
    // alert(`This is your Shortened URL - ${hostDomainName}/${currentUser}/${code}. Click "OK" to see QR Code of the URL.`);

    // Clear input field and state to receive new input
    e.target.reset();
    //setUrl('');
    setCustomDomain('');
  };


  
  const downloadQR = () => {
    const canvas = document.getElementById("qr-code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };






  // Copy to Clipboard
  const copyValue = (val) => {
    var aux = document.createElement("input");
    aux.setAttribute("value", val);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  };

  function handleCopy() {
    copyValue(shortUrl)

    setCopyURL('Copied !!!')

    setTimeout(() => {setCopyURL(copyState)}, 3000);
  }


  return (
    <div className="mainApp">
      <h1>URL Shortner</h1>
      <form onSubmit={handleFormSubmit} className="mainApp__container">
        <input type="url" className="mainApp__textBox" /*value={url}*/ onChange={e => setUrl(e.target.value) }
          placeholder="Enter your long URL here....." title="Input your long URL here"
          required />
          <br />
        <input type="text" className="mainApp__textBox" /*value={customDomain}*/ onChange={e => setCustomDomain(e.target.value) }
          placeholder="Customise your link code....." 
          />
          <br />
        <button type="submit" className="mainApp__btn">Click to Shorten your URL</button>
        <br />
      </form>
      <div>
            <h3>{/*Your Shortened URL is - */}{shortUrl}</h3>
            <button onClick={handleCopy} className="mainApp__btn">{copyURL}</button>
            <br />
            <br />
            { hideQRImage ? (
              <button onClick={() => setHideQRImage(false)} className="mainApp__btn">View QR image</button>
            ) : (
            <>
              <QRCode id="qr-code" className="qr-code" value={qrCode} size={250} level={"H"} includeMargin={true} />
              <br />
              <button onClick={() => setHideQRImage(true)} className="mainApp__btn">Hide QR image</button>
            </>
            )}
            {/* <button>View QR image</button> */}
            <br />

            <br />
            <button onClick={downloadQR} className="mainApp__btn">Download QR</button>
            <br />
        <br />
        {/*<button varient="contained" href={qrCode} download="qrcode.png" >Download QR</button> onClick={downloadQR}*/}
        </div>
    </div>
  );
}

export default MainApp;


//Note: without https:// or http:// before domain name in input field, the url will not work.
//Note: QR image does not load automatically. You have to click on the "View QR image" for image to load and activate new short url. Try useEffect