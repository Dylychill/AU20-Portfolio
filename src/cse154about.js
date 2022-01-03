import React from 'react';


export default function CSE154Page() {
    return <div className="cse154page">
        <h3>Welcome CSE 154!</h3>
        <article>
          <p> Here are some tips and tricks for new students that I've learned as a 154 student and TA. I've been TA'in since Spring 2020. Feel free to peruse this website to learn a little more about me.
              I look forward to working with you all!
          </p>
        </article>
        <div className="row">
          <div className="three columns">
            <h1><span>Class Time</span></h1>
          </div>
          <div className="nine columns">
          <ul>
              <li>Slides are your friend and contain great examples</li>
              <li>Lecture walks through HW-Significant work often</li>
              <li>Attend/watch all lectures, even if it must be in 2x speed</li>
              <li>Section will do more in-depth interactive work, this is where lecture material is
                solidified.</li>
              <li>Find a group in section and get comfortable with your TA.</li>
              <li>Seriously, these people love questions, forget the concept of embarrasement</li>
              <li>Section is very lax - makes jokes in the chat and have fun</li>
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
              <li><strong>PUSH EARLY AND OFTEN TO GIT</strong>. Loading times right before deadline suck so submit early.</li>
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
              <li>Ask Fitz what the hell google is up to, or other nonschool stuff</li>
              <li>Push early and often so TAs can look at ur actual code during trouble shooting</li>
              <li>We generally become unavailable the hour before a deadline so keep this in mind for questions</li>
            </ul>
          </div>
        </div>
    </div>
}