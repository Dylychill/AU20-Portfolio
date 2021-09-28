import React from 'react';
import './App.css';
import Navbar from './navbar.js'
import Projects from './projects.js'
import CSE154Page from './cse154about.js'
import Resume from './resume.js';
import resumeData from './resumeData';
import { SocialIcon } from 'react-social-icons';
import {
  BrowserRouter as Router,
  useHistory,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const history = useHistory();
  const path = history.location.pathname.substring(1)
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="navbar" barColor="green" tabs={["Home", "About", "Projects", "CSE154"]}
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
                <h3>This is a brief version of an old portfolio website I made myself using React. Look around to learn more about me! :)</h3>
                <h3>My current portfolio is <a href="https://mckone-portfolio.squarespace.com/">here</a> if you're curious.</h3>
                <ul className="social">
                  {resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                    return(<li key={item.name}>
                      <SocialIcon url={item.url} bgColor="white" />
                    </li>)
                  })}
                </ul>
              </div>
            </Route>
            <Route path="/Contact" exact>
              <div className="contact">
                <ul className="social">
                  {resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                    return(<li key={item.name}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                    </li>)
                  })}
                </ul>
              </div>
            </Route>
            <Route path="/About" exact>
              <Resume />
            </Route>
            <Route path="/Projects" exact>
              <Projects />
            </Route>
            <Route path="/CSE154" exact>
              <CSE154Page />
            </Route>
            <Route path="*" exact>
              <h1 style={{margin:"10px"}}>404 Not Found</h1>
            </Route>
          </Switch>
        </main>
    </div>
  );
}

export default App;
