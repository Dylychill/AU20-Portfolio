import React from 'react';


export default function CSE154Page() {
    return <div className="cse154page">
        <h3>Welcome CSE 154 Au20 students!</h3>
        <p> Here are some tips and tricks for new students that I've learned as a 154 student and TA. This is my second
            time TA'ing (Sp20 was the first). Feel free to peruse this website to learn a little more about me. 
            I look forward to working with you all!
        </p>
        <div className="row">
          <div className="three columns">
            <h1><span>Class Time</span></h1>
          </div>
          <div className="nine columns">
          <ul>
              <li>Slides are your friend and contain great examples</li>
              <li>Lecture walks through HW-Significant work often</li>
              <li>High Key recommend watching all lectures</li>
              <li>Section will do more in-depth interactive work, this is where lecture material is
                solidified.</li>
              <li>Find a group in section and get comfortable with your TA.</li>
              <li>Seriously, these people love questions, forget the concept of embarrasement</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="three columns">
            <h1><span>Homework</span></h1>
          </div>
          <div className="nine columns">
          <ul>
             <li><strong>READ THE WHOLE SPEC BEFORE ANYTHING ELSE</strong></li>
              <li>Seriously it will be very helpful if you know what your end goal is.</li>
              <li>Start early, even if just reading the spec, so you can ask questions earlier</li>
              <li>Sometimes technical issues arise with new software, so test all software early!</li>
              <li><a href="https://developer.mozilla.org/en-US/">MDN</a> is
                 your friend. Learn how to navigate this website</li>
              <li>Look through comments of old assignments. TAs know what material comes next and
                often consider this when leaving comments. </li>
              <li>CPs are really a place for creativity, go hog wild.
                TAs are more flexible with answering questions.</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="three columns">
            <h1><span>Professors &amp; TAs</span></h1>
          </div>
          <div className="nine columns">
          <ul>
              <li>All their names and info (like this page) are on the website</li>
              <li>These people know what they are about, ask them anything, they love to share</li>
              <li>Seriously they won't be annoyed.</li>
              <li>You can talk to other TAs that aren't yours,,, </li>
              <li> Ask Fitz what the hell google is up to, or other nonschool stuff</li>
            </ul>
          </div>
        </div>
    </div>
}