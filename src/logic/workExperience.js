import 'bootstrap/dist/css/bootstrap.min.css';
import '../visual/windows.css';
import work from "../img/work.jpeg"
import React from 'react';


function WorkingExperience({lng}) {
  return (
    <div>

        <article>
        <aside> <h1> {lng === "es" ? "Experiencia laboral" : "Work experience" } </h1> </aside>
                        <ul className='pt-1'>
                        
                            <li> <b>2021 - 2023: Samsung Store </b> </li>
                                {lng === 'es' ? 
                                
                                <>
                                    Mi primer trabajo fue con GMRA, el cual es el distribuidor oficial de Samsung en Argentina. Estaba a cargo de la atención al cliente, ayudando a los clientes con sus teléfonos, tablets, TVs, etc...
                                    <p>
                                        <b>Skills adquiridos:</b> Atención personalizada, trabajo en equipo, resolución de problemas, paciencia.
                                    </p>
                                </>
                                :  
                                    <>
                                        My first work was with GMRA, which is the stockist for Samsung in Argentina. I was in charge of the customer service, helping the clients with their phones, tablets, TVs, etc...
                                        <p>
                                            <b>Skills acquired:</b> Customer service, teamwork, problem-solving, patience.
                                        </p>
                                    </>
                                }
                            <li> <b>2023 - {lng === "es" ? "Actualidad" : "NOW"}: Alican S.A.</b> </li>
                            
                            <figure>
                                <img src={work} alt="Profile" />
                            </figure>
                                {lng === 'es' ? 

                                    <>
                                    <p> 
                                        Alican es una empresa de una gran relevancia en Argentina que hace alimento balanceado para perros y gatos.
                                        Estoy participe en el area digital siendo formalmente Analista Digital JR. colaboración cross-funcional con marketing, ayudandolos a usar plataformas como MailChimp, EasyPromos, etc.
                                        También hago manipulación de CRM, desarrollo frontend usando HTML, CSS, React y una manipulación mínima de WordPress.
                                    </p>


                                    <p>
                                        <b>Skills adquiridos: </b> JavasScript, HTML, CSS, WordPress, trabajar bajo presión.
                                    </p>
                                    </>
                                
                                
                                :
                                    <>
                                        <p> 
                                            Alican is a very important company in Argentina that made food for dogs and cats.
                                            I'm co-working in the digital area being formally Digital Analyst JR. cross-functional collaboration with marketing, helping them to use plataforms like MailChimp, EasyPromos, etc.
                                            Also i do CRM manipulation, frontend development using HTML, CSS, React and a minimal manipulation of WordPress.
                                        </p>
                                        
                                        
                                        <p>
                                            <b>Skills aquired: </b> JavasScript, HTML, CSS, WordPress, work under pressure.
                                        </p>
                                    </> 
                                }
                                
                        </ul>

        </article>


    </div>
  );
}

export default WorkingExperience;
