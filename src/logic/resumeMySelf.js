import 'bootstrap/dist/css/bootstrap.min.css';
import '../visual/windows.css';
import '../App.css';
import profile from '../img/profile.jpeg';
import React from 'react';


function ResumeMySelf({ lng }) {
    return (
      <div>
        <article>
          <h1 className="headline">Rocio Aylen Arias</h1>
          <h2 className="subhead">
            {lng === 'es'
              ? 'Estudiante de Ciencia de la Computación'
              : 'Computer Science Student'}{' '}
            - Junior Frontend Developer
          </h2>
  
          <div className="article-meta">
            <p>
              {lng === 'es' ? (
                <> Hola y bienvenidos a mi perfil. Como ya deben saber, mi nombre es Rocio. Tengo 22 años de edad. </>
              ) : (
                <>Hello and welcome to my profile. As you may already know, my name is Rocio. I'm 22 years old.</>
              )}
  
              <figure>
                <img src={profile} alt="Profile" />
              </figure>
  
              <div className="pt-3">
                <h1>
                  <i>{lng === 'es' ? '¿Por qué Cs. de la Computación?' : 'Why did I choose Computer Science?'}</i>
                </h1>
              </div>
  
              {lng === 'es' ? (
                <>
                  <p>
                    Es una historia graciosa: a los 18 años no sabía qué hacer con mi vida. Era buena en química y
                    matemáticas, así que decidí comenzar a estudiar ingeniería química.
                  </p>
                  <p>
                    En 2020, estaba a punto de comenzar mi segundo año de química, y una de mis primeras asignaturas fue
                    "Ciencias de la Computación". Fue amor a primera vista. En 2021, decidí cursar la carrera en la{' '}
                    <a href="https://dc.exa.unrc.edu.ar/about/" target="_blank" rel="noreferrer">
                      Universidad Nacional de Río Cuarto
                    </a>
                    .
                    <br />
                    Actualmente, estoy rindiendo mis exámenes finales para completar la carrera, habiendo completado más
                    del 60% de la carrera.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    It's a funny story: at 18, I didn't know what to do with my life. I was good at chemistry and math, so
                    I decided to start studying chemical engineering.
                  </p>
  
                  <p>
                    In 2020, my second year of chemistry was about to begin, and one of my first assignments was "Computer
                    Science." It was love at first sight. In 2021, I decided to pursue a major at the{' '}
                    <a href="https://dc.exa.unrc.edu.ar/about/" target="_blank" rel="noreferrer">
                      National University of Rio Cuarto
                    </a>
                    .
                    <br />
                    Currently, I'm taking my final exams to complete the major, having completed over 60% of the career.
                  </p>
                </>
              )}
            </p>
          </div>
        </article>
      </div>
    );
  }
  
  export default ResumeMySelf;
  