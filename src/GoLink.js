import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { db } from "./firebase";
import { throttle } from 'lodash';



function GoLink() {
    const { code } = useParams();
    const history = useHistory();
    const [url, setUrl] = useState(""); //this will be the url from the database

    //throttle is used to prevent the user from clicking the button multiple times
    const throttledNavigateHistory = throttle((path) => {
        history.push(path);
    }, 1000);

    useEffect(() => {
        let query = db.collection("urls").where("code", "==", code); //this will get the code from the database
        query.onSnapshot((data) => { //this will get the data from the database
if (data.empty) {//if the code is not found in the database
    return throttledNavigateHistory("/user/"); //this will redirect to the home page if the code is not found in the database
} 

let finalData = data.docs[0].data(); //this will get the data from the database

setUrl(finalData.url); //this will get the url from the database
window.location.replace(url); //this will redirect to the url
        });
    }, [code, throttledNavigateHistory, url]); //this will run when the code changes

    return (
        <div></div>
        );
}

export default GoLink;

// prop of total, prop of sources sent to an array, Query.onSnapshot, Query.where, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit, Query.orderBy, Query.startAfter, Query.startAt, Query.endAt, Query.endBefore, Query.get, Query.getDocs, Query.doc, Query.docs, Query.limitToLast, Query.limit,
// window.location.replace to redirect