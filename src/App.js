import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import GoLink from './GoLink';

function App() {

  return (
    <div className="app">
      <Router>
          <Route exact path="/" component={Home} /> {/* This is the route for the Home component */}

          <Route exact path="/:code" component={GoLink} /> {/* This is the route for the GoLink component */} 
      </Router>
    </div>
  );
}

export default App;
