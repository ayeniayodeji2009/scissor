import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebase01";
import { query, collection, getDocs, where } from "firebase/firestore";
import AnalythicsRecord from "../analythics_user/AnalythicsRecord";
import MainApp from "../MainApp";


function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useHistory();
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
    if (!user) return navigate.push("/"); //if user is not logged in, redirect to login page
    fetchUserName(); //fetch user data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  const convertUserNameForURLFormat = name.toLowerCase().split(" ").join("_"); 
  //const userID = name

  // { name } = useParams();
  //alert(name);
  //console.log(`${name} is ${typeof(name)}`);
  return (
      <div className="app">
      <h1>Hello Scissor Dashboard</h1>
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
     </div>
       <MainApp passUser={convertUserNameForURLFormat}/> {/**/}
      <AnalythicsRecord />
      </div>
  );
}
export default Dashboard;

//<Route path="/users/:name" component={UserProfile} />
