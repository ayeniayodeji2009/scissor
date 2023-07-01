import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../engine/firebase01";
import { query, collection, getDocs, where } from "firebase/firestore";
import AnalythicsRecord from "../analythics_user/AnalythicsRecord";
import MainApp from "../components/MainApp";
import Navigation from "../components/Navigation";



function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));/*this will get the user data from the database*/
      const doc = await getDocs(q); /*this will get the user data from the database*/
      const data = doc.docs[0].data(); /*this will get the user data from the database*/
      setName(data.name); //this will get the name from the database
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/")//navigate.push("/"); //if user is not logged in, redirect to login page
    fetchUserName(); //fetch user data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  const at = "@";
  const convertUserNameForURLFormat = at.concat(name.toLowerCase().split(" ").join("_")); // this will convert the name to a url format i.e @username . It will also be passed to the MainApp component and added to the url as a path (i.e /@user/) after the domain name
  //const userID = name

  // { name } = useParams();
  //alert(name);
  //console.log(`${name} is ${typeof(name)}`);
  return (
    <div className="dashboard">    
      <Navigation />
    <div className="dashboard__container">
      <h1>Scissor Dashboard</h1>
    <div >
       <div className="dashboard__container">
        <h3>Hi {name},</h3> You are logged in as;
         <div>User Account: {convertUserNameForURLFormat}</div>
         <div>E-mail: {user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
       </div>
       <MainApp passUser={convertUserNameForURLFormat}/> {/**/}       
      <AnalythicsRecord />
      </div>
      </div>
  );
}
export default Dashboard;

//<Route path="/users/:name" component={UserProfile} />
