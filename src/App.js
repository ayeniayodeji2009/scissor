import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './auth_user/Login';
import Register from './auth_user/Register';
import Reset from './auth_user/Reset';
import Dashboard from './auth_user/Dashboard';

//import Home from './Home';
//import MainApp from './MainApp';
import GoLink from './GoLink';

//<Route exact path="/" component={Home} /> {/* This is the route for the Home component */}

//<Route exact path="/:code" component={GoLink} /> /* This is the route for the GoLink component */

function App() {
  //preventDefault();
  

  return (
    <div className="app">
      <Router>
         {/* <Route exact path="/" component={Home} />  This is the route for the Home component */}
          <Route exact path="/" component={Login} /> {/* This is the route for the Home component */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/:currentUser/" component={Dashboard} />
          {/*<Route exact path="/dashboard/" component={MainApp} />  This is the route for the Home component */}
          <Route exact path="/:currentUser/:code" component={GoLink} /> {/* This is the route for the GoLink component */}

          
         {/*  <Route exact path="/:code" component={GoLink} /> This is the route for the GoLink component */}
           
      </Router>
    </div>
  );
}

export default App;
