import React, {useState} from 'react';
import resumeData from './resumeData';

export default function Projects() {

    return <div className="projects">
        <h3>Projects and Work</h3>
        <article>
            <p> Here are some examples of my work and various projects. 
              This is more a sprinkling of content. For more projects I've done (with much more detail), you can check out
              my current portfolio <a href="https://mckone-portfolio.squarespace.com/">here.</a>
            </p>
        </article>

        <section>
            {resumeData.projects && resumeData.projects.map((proj, i) => {
                return (
                    <div className="row">
                        <div className="three columns">
                            <h1><span>{proj.project.title}</span></h1>
                        </div>
                        <div className="nine columns">
                            <p>{proj.project.description}</p>
                            {
                                proj.project.details && proj.project.details.map((item, i)=>{
                                    return (<div key={i} className="row item">
                                        <div className="twelve columns">
                                            <h1>{item.name}</h1>
                                            <p className="info">
                                                {item.projDescription}
                                            </p>
                                            <p className="info">{item.date}</p>
                                            <p className="info"><em><a href={item.fullLink}>Link</a></em></p>
                                            {item.frameLink &&
                                                <iframe src={item.frameLink}></iframe>
                                            }
                                            {!item.frameLink &&
                                                <img src={item.link}/>
                                            }
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </section>
    </div>
}