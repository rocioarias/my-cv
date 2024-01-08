import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../visual/windows.css';
import '../App.css';
import { Chart } from "react-google-charts";


function Knowledge(){
    const data = [
        ["Language", "Knowledge"],
        ["JavaScript", 7],
        ["Ruby", 5],
        ["Python", 4],
        ["Java", 3],
        ["C", 2],
        ["Others", 4],
      ];
      
    const options = {
        title: "My Daily Activities",
        pieHole: 0.4,
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
          showColorCode: true
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
            <div className="row">
            <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
        </article>
    );

}

export default Knowledge;