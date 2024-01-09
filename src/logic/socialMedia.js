import React from "react";
import habbodancing from "../img/habbodancing.gif"
import 'bootstrap/dist/css/bootstrap.min.css';


function SocialMedia({lng}){

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    const randomPhrases = () => {
        var first;
        var phrases;
        if(lng === 'es'){
            first = "El DJ dice: ";
            phrases = [
                "'¡Hola!'.",
                "'¿Estás disfrutando la musica?'.",
                "'¿Sabias que Aqua es la mejor banda de la historia?'.",
                "'¡Amo esta cancion!'.",
                "'¡Estoy muy feliz hoy!'.",
                "'¡Hoy es un buen dia para bailar!'.",
            ]; 
        }

        else if(lng === 'en'){
            first = "The DJ says: ";
            phrases = [
                "'Hi there!'.",
                "'Are you enjoying the music?'.",
                "'Did you know that Aqua is the best band ever?'.",
                "'I love this song!'.",
                "'I'm so happy today!'.",
                "'Is a good day to dance!'.",
            ];
        }

        var phrase = phrases[getRandomIntInclusive(0, phrases.length - 1)];
        var result = first.concat(phrase);
        alert(result);
    }
     


    return(
        <div className="container">
                <h2> 
                        <div className="pt-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={habbodancing} alt="Say hi to the dj !" style={{ width: "150px", height: "150px", margin:"0px"}} onClick={randomPhrases} /> 
                        </div>    
                </h2>
                <button className="buttonLink" onClick={() => window.open("https://www.linkedin.com/in/rocio-a-arias", "_blank")}>Linkedin</button>
                <br />
                <button className="buttonLink" onClick={() => window.open("https://github.com/rocioarias/", "_blank")} >GitHub</button>
                <br />
                <button className="buttonLink" onClick={() => window.location.href = "mailto:rocioarias888@gmail.com"}>E-mail</button>
        </div>
        
    );
}

export default SocialMedia;