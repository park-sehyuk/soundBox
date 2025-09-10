import { useEffect } from "react";
import "./AnimalPad.css";

const animals = [
  { id: "Q", sound: "/sounds/animal/cat.mp3", title: "cat" },
  { id: "W", sound: "/sounds/animal/chick.mp3", title: "chick" },
  { id: "E", sound: "/sounds/animal/dog.mp3", title: "dog" },
  { id: "A", sound: "/sounds/animal/duck.mp3", title: "duck" },
  { id: "S", sound: "/sounds/animal/elephant.mp3", title: "elephant" },
  { id: "D", sound: "/sounds/animal/monkey.mp3", title: "monkey" },
  { id: "Z", sound: "/sounds/animal/pipit.mp3", title: "pipit" },
  { id: "X", sound: "/sounds/animal/sheep.mp3", title: "sheep" },
  { id: "C", sound: "/sounds/animal/tiger.mp3", title: "tiger" },
];
const AnimalPad = () => {
  const handlePlay = (sound) => {
    const audio = new Audio(sound);
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const animal = animals.find((d) => d.id === event.key.toUpperCase());
      if (animal) {
        handlePlay(animal.sound);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div id="AnimalPad">
      {animals.map((animal) => (
        <button key={animal.id} onClick={() => handlePlay(animal.sound)}>
          {animal.id} - {animal.title}
        </button>
      ))}
    </div>
  );
};
export default AnimalPad;
