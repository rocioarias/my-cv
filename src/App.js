import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import ResumeMySelf from './logic/resumeMySelf';
import MusicReproduction from './logic/music';
import SocialMedia from './logic/socialMedia';
import WorkingExperience from './logic/workExperience';
import Knowledge from './logic/knowledge';

function Curriculum() {
  return (
    <div className='Cv'>
      <div className='Cv-header'>
        <div className='col-md-12'>
          <span>Welcome to my page</span>
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
                  <SocialMedia />
                </div>
              </div> 
            </article>
            <WorkingExperience />
          </div>
          <div className='col-sm'>
            <ResumeMySelf/>
            <Knowledge />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
