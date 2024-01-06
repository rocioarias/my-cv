import 'bootstrap/dist/css/bootstrap.min.css';
import '../visual/windows.css';
import work from "../img/work.jpeg"
import React from 'react';


function WorkingExperience() {
  return (
    <div>

        <article>
        <aside> <h1> Work experience </h1> </aside>
                        <ul className='pt-1'>
                        
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
                    

        </article>


    </div>
  );
}

export default WorkingExperience;
