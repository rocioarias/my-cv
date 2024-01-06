import React, { useState } from "react";
import YouTubePlayer from "react-player/youtube";
import "../visual/music.css"; // Ensure this path is correct

function MusicReproduction() {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.25);

    const handlePlay = () => {
        setPlaying(!playing);
    }

    const changeVolume = (rule) => {
        if(rule === '-'){
            setVolume(volume-0.1);
        }
        else{
            setVolume(volume+0.1);
        }
    }

    return (
        <div className="py-5">
            <div className="mp3Reproducer">
                <div className="mp3Reproducer-screen">
                    <YouTubePlayer
                        url="https://youtu.be/qdDVtFvJwUc?list=RDqdDVtFvJwUc"
                        controls={false}
                        volume={volume}
                        loop
                        
                        className="video"
                        playing={playing}
                    />
                </div>
                <div className="mp3Reproducer-circle">
                    <button className="mp3Reproducer-button volume-up" onClick={() => changeVolume("+")}>+</button>
                    <button className="mp3Reproducer-button play" onClick={handlePlay}>
                        {playing ? 'Pause' : 'Play'}
                    </button>
                    <button className="mp3Reproducer-button volume-down" onClick={() => changeVolume("-")}>-</button>
                </div>
            </div>
        </div>
    );
}

export default MusicReproduction;
