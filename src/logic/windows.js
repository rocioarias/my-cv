import 'bootstrap/dist/css/bootstrap.min.css';
import '../visual/windows.css';
import '../App.css';
import profile from '../img/profile.jpeg';
import work from "../img/work.jpeg"
import React from 'react';


function WindowsRetro() {
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
                    
                    <p>
                        
                        <aside> <h1> Working experience </h1> </aside>
                        <ul className='pt-4'>
                        
                            <li> <b>2021 - 2023: Samsung Store </b> </li>
                                My first work was with GMRA, which is the stockist for Samsung in Argentina, i was in charge of the custom service, helping the clients with their phones, tablets, TV's, etc...
                                <p>
                                    <b>Skills aquired:</b> Custom service, team work, problem solving, patience.
                                </p>
                            <li> <b>2023 - NOW: Alican S.A.</b> </li>
                            <figure>
                                <img src={work} alt="Profile picture" />
                                <figcaption>Picture of one of my first days of work.</figcaption>
                            </figure>
                                <p> 
                                    Alican is a very important company in Argentina that made food for dogs and cats.
                                    I'm co-working in the digital area being formally Digital Analyst JR. cross-functional collaboration with marketing, helping them to use plataforms like MailChimp, EasyPromos, etc.
                                        Also i do CRM manipulation, frontend development using HTML, CSS, React and a minimal manipulation of WordPress.
                                </p>
                                
                                   
                                    <p>
                                    <b>Skills aquired: </b> JavasScript, HTML, CSS, WordPress, work under pressure.
                                </p>
                        </ul>

                    </p>
                
                </p>

            </div>


        </article>


    </div>
  );
}

export default WindowsRetro;
