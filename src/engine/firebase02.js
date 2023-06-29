//For Analythics
import firebase from 'firebase/compat/app';
import initializeApp from 'firebase/app'
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBV9q_s2TDVYh0uypuIMSAP2_THFy_TULg",
    authDomain: "scissor-4ebc9.firebaseapp.com",
    projectId: "scissor-4ebc9",
    storageBucket: "scissor-4ebc9.appspot.com",
    messagingSenderId: "973643646304",
    appId: "1:973643646304:web:e0df19c90ce53b689a8a05",
    measurementId: "G-WW39SNNZFW"
  };


  const app = initializeApp(firebaseConfig);
  export const firestore = getFirestore(app);
  const db = getFirestore(app);  // Initialize Firebase Firestore
  //const googleProvider = new GoogleAuthProvider(); // Initialize Firebase Google Auth Provider

const analytics = async (analytics) => {
    try {
        const qAnalytics = query(collection(db, "analytics"), where("uid", "==", analytics.uid)); // Get user data from Firestore    } catch {
        const docs = await getDocs(qAnalytics); // Get user data from Firestore

        if (docs.docs.length === 0) { // If user does not exist in Firestore
            await addDoc(collection(db, "analytics"), { // Add user to Firestore
                uid: analytics.uid, // User ID
                name: analytics.displayName, // User name
                authProvider: "google", // Authentication provider
                email: analytics.email, // User email
                url: analytics.url, //this will get the url from the database
                code: analytics.code, //this will get the code from the database
                date: analytics.date,
                time: analytics.time,
                timestamp: analytics.timestamp,
                ip: analytics.ip,
                browser: analytics.browser,
                os: analytics.os,
                device: analytics.device,
                country: analytics.country,
                region: analytics.region,
                city: analytics.city,
                latitude: analytics.latitude,
                longitude: analytics.longitude,
                timezone: analytics.timezone,
                isp: analytics.isp,
                org: analytics.org,
                as: analytics.as,
                reverse: analytics.reverse,
                mobile: analytics.mobile,
                proxy: analytics.proxy,
                hosting: analytics.hosting,
                query: analytics.query,
                currency: analytics.currency,
                currencySymbol: analytics.currencySymbol,
                currencyTraded: analytics.currencyTraded,
                currencyTradedSymbol: analytics.currencyTradedSymbol,
                currencyTradedRate: analytics.currencyTradedRate,
                currencyTradedRateInverse: analytics.currencyTradedRateInverse,
                currencyTradedRateFloat: analytics.currencyTradedRateFloat,
                currencyTradedRateInverseFloat: analytics.currencyTradedRateInverseFloat,
                currencyTradedTime: analytics.currencyTradedTime,
                currencyTradedDate: analytics.currencyTradedDate,
                currencyTradedTimezone: analytics.currencyTradedTimezone,
                currencyTradedTimezoneName: analytics.currencyTradedTimezoneName,
            });


            
        }

    } catch {
        const err = "An error occured while fetching user data";
        console.error(err); // Log error
        alert(err.message); // Alert error message
    }
};

    const trackUrl = (url) => {
    firebase.firestore().collection('analytics').add({ //this will add the url to the database
      url, //this will get the url from the database
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), //this will get the timestamp from the database
      analytics: analytics(url), //this will get the analytics from the database
    });
  }
  
export { trackUrl };
