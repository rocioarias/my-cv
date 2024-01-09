import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import ResumeMySelf from './logic/resumeMySelf';
import MusicReproduction from './logic/music';
import SocialMedia from './logic/socialMedia';
import WorkingExperience from './logic/workExperience';
import Knowledge from './logic/knowledge';


function Curriculum() {

  const [lng, setLng] = useState('en');

  return (
    <div className='Cv'>
      <div className='Cv-header'>
        <div className='row'>
        <div className='col-md-11'>
          <span>Welcome to my page</span>
        </div>
        <div className='col-sm' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h5> 
            <button onClick={() => setLng('es')} style={{ backgroundColor: lng === 'es' ? '#a9a8a8' : 'white' }}> 🇦🇷 </button> 
            <button onClick={() => setLng('en')} style={{ backgroundColor: lng === 'en' ? '#a9a8a8' : 'white' }}> 🇺🇸 </button> 
          </h5>
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
