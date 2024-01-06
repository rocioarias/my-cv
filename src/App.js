import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Windows98 from './logic/windows';

function Curriculum() {
  return (
    <div className='Cv'>
      <div className='Cv-header'>
        <div className='col-md-12'>
          
            <span>Welcome to my page</span>
          
        </div>
      </div>
          <Windows98 />

    </div>
  );
}

export default Curriculum;
