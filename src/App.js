import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import WindowsRetro from './logic/windows';
import MusicReproduction from './logic/music';

function Curriculum() {
  return (
    <div className='Cv'>
      <div className='Cv-header'>
        
        <div className='col-md-12'>
          
            <span>Welcome to my page</span>
          
        </div>
      </div>
      <div>
      <MusicReproduction />
      </div>
          
          <WindowsRetro />

    </div>
  );
}

export default Curriculum;
