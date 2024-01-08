import React from "react";
import habbodancing from "../img/habbodancing.gif"
import bubble from "../img/bubble.png"
import 'bootstrap/dist/css/bootstrap.min.css';


function SocialMedia(){

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    const randomPhrases = () => {
        var first = "The dj says: ";
        const phrases = [
            "'Hi there!'.",
            "'Are you enjoying the music?, remember you can pause it in any time'.",
            "'Did you know that Aqua is the best band ever?'",
            "'I love this song!'.",
            "'I'm so happy today!.'",
            "'Today is a good day to dance!'.",
        ];

        var phrase = phrases[getRandomIntInclusive(0, phrases.length - 1)];
        var result = first.concat(phrase);
        alert(result);
    }
     


    return(
        <div className="container">
            <h2> 
            <img src={bubble} alt="bubble of speach" style={{ width: "250px", height: "36px"}}/>
            <div className="pt-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                
                <img src={habbodancing} alt="Say hi to the dj !" style={{ width: "150px", height: "150px", margin:"0px"}} onClick={randomPhrases} /> 
            </div>    
             </h2>
            <button className="buttonLink" onClick={() => window.open("https://www.linkedin.com/in/rocio-a-arias", "_blank")}>Linkedin</button>
            <br />
            <button className="buttonLink" onClick={() => window.open("https://github.com/rocioarias/", "_blank")} >GitHub</button>
            
        </div>
    );
}

export default SocialMedia;