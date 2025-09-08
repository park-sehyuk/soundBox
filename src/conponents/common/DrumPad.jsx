import { useEffect } from "react";
import "./DrumPad.css";

const drums = [
  { id: "Q", sound: "/sounds/drum/kick-drum.mp3", title: "Kick Drum" },
  { id: "W", sound: "/sounds/drum/snare-drum.mp3", title: "Snare Drum" },
  { id: "E", sound: "/sounds/drum/hihat.mp3", title: "Hi-Hat" },
  { id: "A", sound: "/sounds/drum/crash.mp3", title: "Crash Cymbal" },
  { id: "S", sound: "/sounds/drum/ride-cymbal.mp3", title: "Ride Cymbal" },
  { id: "D", sound: "/sounds/drum/tom.mp3", title: "Tom" },
  { id: "Z", sound: "/sounds/drum/tom2.mp3", title: "Tom 2" },
  { id: "X", sound: "/sounds/drum/floor-tom.mp3", title: "Floor Tom" },
];

const DrumPad = () => {
  const handlePlay = (sound) => {
    const audio = new Audio(sound);
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const drum = drums.find((d) => d.id === event.key.toUpperCase());
      if (drum) {
        handlePlay(drum.sound);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="DrumPad">
      {drums.map((drum) => (
        <button key={drum.id} onClick={() => handlePlay(drum.sound)}>
          {drum.id} - {drum.title}
        </button>
      ))}
    </div>
  );
};

export default DrumPad;
