import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Switch>
              <Route path='/' exact  />
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
