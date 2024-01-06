import React, { useState } from "react";
import YouTubePlayer from "react-player/youtube";
import "../visual/windows.css";
import "../visual/music.css"; // Ensure this path is correct

function MusicReproduction() {
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(0.25);

    const handlePlay = () => {
        setPlaying(!playing);
    }


    return (
        <div className="py-5">
            <div className="mp3Reproducer">
                <div className="mp3Reproducer-screen">
                    <YouTubePlayer
                        url="https://youtu.be/H6na01EG2gk"
                        controls={false}
                        volume={volume}
                        className="video"
                        playing={playing}
                    />
                </div>
                <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.02}
                        value={volume}
                        className="mp3Reproducer-volume"
                        onChange={event => {
                            setVolume(event.target.valueAsNumber)
                        }}
                />
                <div className="mp3Reproducer-circle">
                    

                    <button className={playing ? "mp3Reproducer-button pause" : "mp3Reproducer-button play"} onClick={handlePlay} />
                        
                    

                </div>
            </div>
        </div>
    );
}

export default MusicReproduction;
