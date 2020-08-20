import React from 'react';
import './App.css';
import Navbar from './navbar.js'
import AllComponents from './componentsPage.js'
import Resume from './resume.js';
// import Home from './home.js';
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
        <Navbar className="navbar" barColor="green" tabs={["Home", "Contact", "About", "Components"]}
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
              <div className="home">
                <h1>Dylan McKone</h1>
                <h3>I am a University of Washington undergraduate studying Germanics and Human-Centered Design and Engineering (HCDE).</h3>
                <h3>This is a brief portfolio website I made myself using React and JSX. Look around to learn more about me! :)</h3>
              </div>
            </Route>
            <Route path="/Contact" exact>CONTACT</Route>
            <Route path="/About" exact>
              <Resume />
            </Route>
            <Route path="/Components" exact>
              <AllComponents />
            </Route>
            <Route path="*" exact>404 Not Found</Route>
          </Switch>
        </main>
    </div>
  );
}

export default App;
