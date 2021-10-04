import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar';
{/*Alt+Shft+down+arrow to copy same content here */}

function App() {
  return (
    <>
    <Router>
      <Navbar />  
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
