import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import ResumeMySelf from './logic/resumeMySelf';
import MusicReproduction from './logic/music';
import SocialMedia from './logic/socialMedia';
import WorkingExperience from './logic/workExperience';
import Knowledge from './logic/knowledge';
import Pokemon from './logic/pokemon';

function Curriculum() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const [lng, setLng] = useState('en');
  const [startMenu, setStartMenu] = useState(false);

  return (
    <div className='Cv'>
      <div className='Cv-header'>
        <div className='container'>
          <div className='row py-2'>
            <div className='col-sm' style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", fontFamily: "monospace" }}>
              <label className="switch">
                <input type="checkbox" onChange={() => lng === 'es' ? setLng('en') : setLng('es')} />
                <span className="slider round"></span>
              </label>
              <span style={{ fontSize: "10px", paddingLeft: "10px" }}>{lng === 'es' ? "Español" : "English"}</span>
            </div>
            <div className='col-md-12' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <span> {lng === 'es' ? "Bienvenid@ a mi página" : "Welcome to my page"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
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
            <Pokemon lng={lng} />
          </div>
          <div className='col-sm-6'>
            <ResumeMySelf lng={lng} />
            <Knowledge lng={lng} />
          </div>
        </div>
      </div>
      <div id="toolbar">
        <div className="toolbar-start-menu">
          <button onClick={() => setStartMenu(!startMenu)} className="start-button">
            Start
          </button>

          {startMenu && (<div className="start-menu-wrapper">
            <div className="start-menu">
              <div className="start-menu-link">
                <strong>{lng === 'es' ? "Hecho por" : "Made by"} Rocio A. Arias - {lng === 'es' ? "gracias por visitar mi página, espero tengas un lindo día!" : "thanks for visiting my page, have a nice day!"}</strong>
              </div>
            </div>
          </div>)}
        </div>
        <div className="toolbar-separator"></div>

        <div className="toolbar-left">
          <button className="toolbar-icon ie"></button>
          <button className="toolbar-icon outlook"></button>
          <button className="toolbar-icon desktop"></button>
          <button className="toolbar-icon channels"></button>
        </div>

        <div className="toolbar-separator"></div>

        <div className="toolbar-right">
          <div className="time">
            <span className="hour">{currentHour}</span>:
            <span className="minutes">{currentMinutes}</span>
            {currentHour < 12 ? " AM" : " PM"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
