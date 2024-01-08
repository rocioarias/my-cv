import 'bootstrap/dist/css/bootstrap.min.css';
import '../visual/windows.css';
import '../App.css';
import profile from '../img/profile.jpeg';
import React from 'react';


function ResumeMySelf() {
  return (
    <div>

        <article>		
        <h1 className="headline">Rocio Aylen Arias</h1>
            <h2 className="subhead">Computer Science Major Student - Junior Frontend Developer</h2>

            <div className="article-meta">
                <p>
                    Hello and welcome to my profile. As you may already know, my name is Rocio. I'm 22 years old, and this is a project to showcase my abilities as a frontend developer.
                    
                    <figure>
                        <img src={profile} alt="Profile picture" />
                    </figure>
                    
                    <p className="pt-3">
                        <i><h1>How did I decide to study Computer Science?</h1></i>
                    </p>

                    <p>
                        It's a funny story: at 18, I didn't know what to do with my life. I was good at chemistry and math, so I decided to start studying chemical engineering.
                    </p>
                    
                    <p>
                        In 2020, my second year of chemistry was about to begin, and one of my first assignments was "Computer Science." It was love at first sight. In 2021, I decided to pursue a major at the <a href="https://dc.exa.unrc.edu.ar/about/" target="_blank">National University of Rio Cuarto</a>.
                        <br/>
                        Currently, I'm taking my final exams to complete the major, having completed over 60% of the career.

                    </p>
                </p>
            </div>


        </article>

    </div>
  );
}

export default ResumeMySelf;
