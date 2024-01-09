import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../visual/windows.css';
import '../App.css';
import bubble from "../img/speechBubble.gif";
import bubbleSpanish from "../img/bubbleSpanish.gif";
import { Chart } from "react-google-charts";


function Knowledge({lng}){
    /* Knowledge: between 1 to 4 intermediate, from 5 to 7 advanced. */

    const data = [
        ["Language", "Knowledge"],
        ["JavaScript", 7],
        ["Ruby", 5],
        ["Python", 4],
        ["Java", 4],
        ["C", 3],
        ["Others", 2],
      ];
      
    const options = {
        title: "Programming Languages",
        is3D: true,
        slices: [
          {
            color: "#704ce2"
          },
          {
            color: "#a076ec"
          },
          {
            color: "#ffcaff"
          },
          {
            color: "#4122d8"
          }
        ],
        legend: {
          position: "bottom",
          alignment: "center",
          textStyle: {
            color: "233238",
            fontSize: 9
          }
        },

        tooltip: {
          showColorCode: false
        },
        chartArea: {
          left: 0,
          top: 0,
          width: "100%",
          height: "80%"
        },
        
        backgroundColor: "transparent"

      };



    return(
        <article>
            <aside><h1>{lng === "es" ? "Conocimientos" : "Knowledge"}</h1></aside>
                <div className="row pt-4">
                  <h2> Frontend </h2>
                  <div className="row">
                    {lng === "es" ? 
                        <>
                            <p>
                                Mis primeros pasos en el desarrollo frontend fueron con HTML, CSS y JavaScript, y tengo un buen conocimiento de los fundamentos, 
                                pero siempre estoy aprendiendo cosas nuevas.
                            </p>
                    
                        </> :
                        <>
                            <p>
                                My first steps in frontend development were with HTML, CSS and JavaScript, and i have a good knowledge of
                                the fundamentals, but i'm always learning new things. 
                            </p>
                        </>
                    
                    }
                  </div>

                  <div className="row">
                    <div className="col-md-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={lng ===  "es" ? bubbleSpanish : bubble} alt="Speach Bubble" style={{minWidth:"100px", maxWidth: "210px",maxHeight: "40px" }}/>
                    </div>
                    <div className="col-sm">
                        {lng === "es" ? 
                            <> 
                                Recientemente he estado aprendiendo React y me encanta, creo que es una gran herramienta para el desarrollo frontend.
                            </> : 
                            <>
                                Recently i have been learning React and i'm loving it, i think is a great tool for frontend development.
                            </>}
                      
                    </div>
                  </div>
                </div>

                <div className="row pt-4">
              <h2> Backend</h2>
                    {lng === "es" ?  
                        <> 
                            <p>
                                En particular, tengo una pasión por el desarrollo frontend, pero en los primeros años de la universidad, las bases de la programación se me enseñaron con lenguajes de bajo nivel y desarrollo backend.
                            </p>
                            <p>
                                Hice muchos proyectos con C, Java, Python y Ruby on Rails, y tengo un buen conocimiento de los fundamentos de la programación, estructuras de datos y algoritmos.
                            </p>
                            <p>
                                También tengo un buen conocimiento de las bases de datos SQL y SQlite, y tengo experiencia con Docker y Git.
                            </p>
                        
                        </> 
                    
                    : 
                        <> 
                            <p>
                                In particular, i have a passion for frontend development, but in the first
                                years of college, the bases of programming were taught to me with low-level languages and
                                backend development.
                            </p>
                            <p>
                                I made a lot of projects with C, Java, Python and Ruby on Rails, and i have a good knowledge of the
                                fundamentals of programming, data structures and algorithms.
                            </p>
                            <p>
                                Also i have a good knowledge of SQL and SQlite databases, and i have experience with
                                Docker and Git.
                            </p>
                        </>}
              <Chart
                          chartType="PieChart"
                          data={data}
                          options={options}
                          width={"100%"}
                          height={"100%"}
              />
                </div>

                  <div className="row pt-4">
                    <h2>Soft Skills</h2>
                    {lng === "es" ?  
                        <> 
                            <p>
                                Además de mis habilidades técnicas, también tengo experiencia en gestión del tiempo, redes de Petri y diagramas de Gantt. Entiendo la importancia de una planificación de proyectos eficiente y he utilizado estas herramientas para administrar tareas y recursos de manera efectiva.
                            </p>
                        </>  
                    :  
                        <>
                            <p>
                                In addition to my technical skills, I also have experience in time management, Petri nets, and Gantt diagrams. I understand the importance of efficient project planning and have utilized these tools to effectively manage tasks and resources.
                            </p>
                        </>}
                  </div>

        </article>
    );

}

export default Knowledge;