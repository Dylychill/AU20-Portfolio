import React, { Component } from 'react';
import resumeData from './resumeData';
import profilePic from './img/profilepic.PNG'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Resume extends Component {

  render() {
    return (
      <div>
        {/* Intro with pic */}
        <section className="intro">
          <img src={profilePic} alt="profile picture" />
          <div>
            <h1>Who am I?</h1>
            <p>{resumeData.aboutme}</p>
          </div>
        </section>
      {/* The Eduction and Skills info */}
        <section id="resume">
          <div className="row education">
            <div className="three columns">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns">
              {
                resumeData.education && resumeData.education.map((item, i) => {
                  return (
                    <div key={i} className="row item">
                      <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                        {/* <p>
                          {item.Achievements}
                        </p> */}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="row work">
            <div className="three columns">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns">
              {
                resumeData.work && resumeData.work.map((item, i) => {
                  return (
                    <div key={i} className="row item">
                      <div className="twelve columns">
                        <h3>{item.CompanyName}</h3>
                        <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                        <p>
                          {item.Achievements}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          {/* <div className="row skill">
            <div className="three columns">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns">
              <h3>
                {resumeData.skillsProgDescription}
              </h3>
              <div className="bars">
                <ul className="skills">
                  {
                    resumeData.skillsProg && resumeData.skillsProg.map((item, i) => {
                      return (
                        <li key={i}>
                          <span
                            className={`bar-expand ${item.skillname.toLowerCase()}`}
                            style={{ width: `${item.level}%` }}
                          >
                          </span>
                          <em>{item.skillname}</em>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <h3>
              {resumeData.skillsDescription}
              </h3>
              <div className="bars">
                <ul className="skills">
                  {
                    resumeData.skills && resumeData.skills.map((item, i) => {
                      return (
                        <li key={i}>
                          <span
                            className={`bar-expand ${item.skillname.toLowerCase()}`}
                            style={{ width: `${item.level}%` }}
                          >
                          </span>
                          <em>{item.skillname}</em>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>*/}
        </section>
        {/* More personal details */}
        <section className="personal">
          <h1>Personal Info</h1>
          <h2>More in Photo Form</h2>
          <div>
            <Carousel dynamicHeight='true' infiniteLoop="true">
              {resumeData.photoGallery && resumeData.photoGallery.map((item, i) => {
                return (<div key={i}>
                  <img src={item.source}></img>
                  <p className="legend">{item.label}</p>
                </div>)
              })}
            </Carousel>
          </div>
          <h2>Things I can't stop thinking about</h2>
          <ul>
            <li>The Magnus Archive (Podcast)</li>
            <li>Final Fantasy 14</li>
            <li>Thief 2: The Metal Age</li>
            <li>Percy Jackson (should I read the books again? did they age well?)</li>
            <li>Breath of The Wild</li>
            <li>Animal Crossing :)</li>
          </ul>
        </section>
      </div>
    );
  }
}
