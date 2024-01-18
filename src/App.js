import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import ResumeMySelf from './logic/resumeMySelf';
import MusicReproduction from './logic/music';
import SocialMedia from './logic/socialMedia';
import WorkingExperience from './logic/workExperience';
import Knowledge from './logic/knowledge';
import Pokemon from './logic/pokemon';


function Curriculum() {

  const [lng, setLng] = useState('en');

  return (
    <div className='Cv'>
      <div className='Cv-header'>
      <div className='container'>
        <div className='row py-2'>
        <div className='col-md-12'style={{ display: "flex", justifyContent:"center", alignItems: "center" }}>
          <span> {lng === 'es' ? "Bienvenid@ a mi página" : "Welcome to my page"}</span>
        </div>
        <div className='col-sm' style={{ display: "flex", justifyContent:"flex-end", alignItems: "center", fontFamily:"monospace" }}>
            <label class="switch">
              < input type="checkbox" onChange={() => lng === 'es' ? setLng('en') : setLng('es')}/>
              <span class="slider round"></span>
            </label>
            <span style={{fontSize:"10px", paddingLeft: "10px"}}>{lng === 'es' ? "Español" : "English"}</span>
        </div>
      </div>
        </div>
      </div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <article>
              <div className='row'>
                <div className='col-sm'>
                  <MusicReproduction />
                </div>
                <div className='col-sm'>
                  <SocialMedia lng={lng} />
                </div>
              </div> 
            </article>
            <WorkingExperience lng={lng} />
            <Pokemon  />
          </div>
          <div className='col-sm'>
            <ResumeMySelf lng={lng} />
            <Knowledge lng={lng} />
          </div>
        </div>
      </div>
      <div className='footer'>
        {lng === 'es' ? "Hecho por" : "Made by"} Rocio A. Arias - {lng === 'es' ? "gracias por visitar mi página, espero tengas un lindo día!" : "thanks for visiting my page, have a nice day!"}
      </div>
    </div>
  );
}

export default Curriculum;
