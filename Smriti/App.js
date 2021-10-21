
import './App.css';
import Login1 from './MyComponents/login/Login1';
import Register from './MyComponents/register/Register';
import Adminpage from './MyComponents/adminpage/Adminpage';
import Adminlogin from './MyComponents/adminlogin/Adminlogin';
import Homepage from './MyComponents/homepage/Homepage';
import Home from './MyComponents/Pages/Home';

import News from './MyComponents/News';
import Footer from './MyComponents/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';


function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path="/login1">
            <Login1 setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/adminpage">
            <Adminpage />
          </Route>
          <Route path="/adminlogin">
            <Adminlogin />
          </Route>
          <Route exact path="/homepage">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login1 setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/News">
            <News />
          </Route>
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
