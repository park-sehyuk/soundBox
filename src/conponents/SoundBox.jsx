import { useState } from "react";
import { DrumPad, AnimalPad } from "./common";
import "./SoundBox.css";

const SoundBox = () => {
  const [soundType, setSoundType] = useState("drum");

  const handleClickType = (e) => setSoundType(e.target.value);

  return (
    <div id="SoundBox">
      <div className="soundSelect">
        <button className="drumBtn" value="drum" onClick={handleClickType}>
          drum
        </button>
        <button className="animalBtn" value="animal" onClick={handleClickType}>
          animal
        </button>
      </div>
      {soundType === "drum" ? <DrumPad /> : <AnimalPad />}
    </div>
  );
};
export default SoundBox;
