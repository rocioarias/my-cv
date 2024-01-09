import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../visual/windows.css';
import '../App.css';
import bubble from "../img/speechBubble.gif";
import { Chart } from "react-google-charts";


function Knowledge(){
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
            <aside><h1>Knowledge</h1></aside>
                <div className="row pt-4">
                  <h2> Frontend </h2>
                  <div className="row">
                    <p>
                      My first steps in frontend development were with HTML, CSS and JavaScript, and i have a good knowledge of
                      the fundamentals, but i'm always learning new things. 
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-md-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={bubble} alt="Speach Bubble" style={{minWidth:"100px", maxWidth: "210px",maxHeight: "40px" }}/>
                    </div>
                    <div className="col-sm">
                    
                      Recently i have been learning React and i'm loving it,
                      i think is a great tool for frontend development.
                    </div>
                  </div>
                </div>

                <div className="row pt-4">
              <h2> Backend</h2>
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
                Also i have a good knowledge of SQL and NoSQL databases, and i have experience with
                Docker and Git.
              </p>
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
                    <p>
                      In addition to my technical skills, I also have experience in time management, Petri nets, and Gantt diagrams. I understand the importance of efficient project planning and have utilized these tools to effectively manage tasks and resources.
                    </p>
                  </div>

        </article>
    );

}

export default Knowledge;