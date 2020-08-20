import React from 'react';
import './App.css';
import Navbar from './navbar.js'
import Slider from './slider.js'
import {
  BrowserRouter as Router,
  useHistory,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const history = useHistory();
  const path = history.location.pathname.substring(1)
  console.log(path)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="navbar" barColor="green" tabs={["Home", "Contact", "About"]}
        onSelect={t=>{
          const p = t==='Home' ? '/' : '/'+t // home page now has nothing in url
          history.push(p)}}
        />
        </header>
        <main className="page">
          {/* Switch and Route uses history path makes it so clicking on navbar moves url path
          Switch looks in order down the line, if this then render, if not check the next one*/}
          <Switch>
            <Route path="/" exact>
              HOME
              <div>
                <Slider />
              </div>
            </Route>
            <Route path="/Contact" exact>CONTACT</Route>
            <Route path="/About" exact>ABOUT</Route>
            <Route path="*" exact>404 Not Found</Route>
          </Switch>
        </main>
    </div>
  );
}

export default App;
