import 'bootstrap/dist/css/bootstrap.min.css';
import '../visual/windows.css';
import '../App.css';
import ResumeMySelf from './resumeMySelf';
import WorkingExperience from './workExperience';
import React from 'react';


function WindowsRetro() {
  return (
    <div>
        <ResumeMySelf />
        <WorkingExperience />
    </div>
  );
}

export default WindowsRetro;
