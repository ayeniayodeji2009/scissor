import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth_user/Login';
import Register from './auth_user/Register';
import Reset from './auth_user/Reset';
import Dashboard from './auth_user/Dashboard';

import Home from './components/Home';
//import MainApp from './MainApp';
import GoLink from './components/GoLink';
import About from './components/About';

//<Route exact path="/" component={Home} /> {/* This is the route for the Home component */}

//<Route exact path="/:code" component={GoLink} /> /* This is the route for the GoLink component */

function App() {
  //preventDefault();
  

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route index element={<Home />} /> {/*  This is the route for the Home component */}
          <Route  path="/about" element={<About />} />
          <Route  path="/login" element={<Login />} /> {/* This is the route for the Home component */}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/:currentUser/" element={<Dashboard />} />
          {/*<Route exact path="/dashboard/" component={MainApp} />  This is the route for the Home component */}
          <Route exact path="/:currentUser/:code" element={<GoLink />} /> {/* This is the route for the GoLink component */}

          
         {/*  <Route exact path="/:code" component={GoLink} /> This is the route for the GoLink component */}
         </Routes>
      </Router>
    </div>
  );
}

export default App;
