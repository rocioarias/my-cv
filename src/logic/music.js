import React, { useState } from "react";
import YouTubePlayer from "react-player/youtube";
import "../visual/windows.css";
import "../visual/music.css"; // Ensure this path is correct

function MusicReproduction() {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.25);

    const handlePlay = () => {
        setPlaying(!playing);
    }


    return (
        <div className="py-5">
            <div className="mp3Reproducer">
                <div className="mp3Reproducer-screen">
                    <YouTubePlayer
                        url="https://youtube.com/playlist?list=PLE26BACFD5D49B310&si=mzwdtr3Qkx4am22f"
                        controls={false}
                        volume={volume}
                        className="video"
                        playing={playing}
                        muted={false}
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
