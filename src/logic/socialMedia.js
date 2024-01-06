import React from "react";
import cat from "../img/bongo-cat-cute.gif"
import 'bootstrap/dist/css/bootstrap.min.css';


function SocialMedia(){
    return(
        <div className="container">
            <h2> LinkTree </h2>
            <button className="buttonLink">Linkedin</button>
            <br />
            <button className="buttonLink">GitHub</button>
            <br />
            <button className="buttonLink">Instagram</button>
        
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={cat} style={{ width: "200px", height: "150px"}} /> 
            </div>
        </div>
    );
}

export default SocialMedia;