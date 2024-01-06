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
            <h2 className="subhead">Computer Science major student - FrontEnd Developer Jr </h2>
            
            <div className="article-meta">
                <p>
                    Hello and welcome to my profile, as maybe you already know my name is Rocio, i'm 22 years old and this is a proyect of resume to show my habilities as Front development.
                    
                    <figure>
                        <img src={profile} alt="Profile picture" />
                    </figure>
                    
                    <p className='pt-3'>
                        <i> <h1>How do i decide to study Computer Science?</h1> </i>
                    </p>
                    

                    <p>
                        Is really a funny story: 18 years, i didn't know what to do with my life, i was good in chemistry and maths so i decide to start chemistry engineer.
                    </p>
                    <p>
                        2020 starts and my second year of chemistry was around the corner, one of my firsts assignatures was "Computer Science".
                        Was love at first sight. 
                        In 2021 i decide to start the major in <a href="https://dc.exa.unrc.edu.ar/about/" target="_blank">National University of Rio Cuarto</a>.
                        <br/>
                        Currently i'm doing my finals exams to finish the major, having at the momento avobe 60% of the career done.

                    </p>   
                
                </p>

            </div>


        </article>

    </div>
  );
}

export default ResumeMySelf;
