import { KeyboardEventHandler, useState } from "react";
import "./App.css";
import Door from "./Door";

function App() {
  const [log, setLog] = useState<string>(
    "One door has a prize.\nTwo doors have a monster.\nChoose a door."
  );
  const [choice, setChoice] = useState<0 | 1 | 2 | 3>(0);
  const [prize, setPrize] = useState<1 | 2 | 3>(
    Math.floor(Math.random() * 3 + 1) as 1 | 2 | 3
  );
  const [openedDoor, setOpenedDoor] = useState<0 | 1 | 2 | 3>(0);
  const [gameState, setGameState] = useState<"choice" | "switch" | "result">(
    "choice"
  );
  const [wins, setWins] = useState<number>(0);
  const [losses, setLosses] = useState<number>(0);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === " " || e.key === "Enter") {
      onContinue();
    }
  };

  const onContinue = () => {
    if (choice === 0 || gameState === "switch") return;
    if (gameState === "choice") {
      setGameState("switch");
      const numbers: [1, 2, 3] = [1, 2, 3];
      let monsterDoor: 0 | 1 | 2 | 3 = 0;
      for (const num of numbers) {
        if (num !== prize && num !== choice) {
          monsterDoor = num;
          break;
        }
      }
      setOpenedDoor(monsterDoor);
      setLog(
        `Door #${monsterDoor} was opened, revealing a monster's lair.\nYou may now choose the other door, or keep your original choice.`
      );
    }
    if (gameState === "result") {
      setLog(
        "One door has a prize.\nTwo doors have a monster.\nChoose a door."
      );
      setChoice(0);
      setPrize(Math.floor(Math.random() * 3 + 1) as 1 | 2 | 3);
      setOpenedDoor(0);
      setGameState("choice");
    }
  };

  // Props for Door Components
  const generalDoorProps = {
    choice,
    setChoice,
    prize,
    setPrize,
    setLog,
    openedDoor,
    gameState,
    setGameState,
    setWins,
    setLosses,
  };

  return (
    <main className="main-content">
      <a
        className="title-header"
        href="https://en.wikipedia.org/wiki/Monty_Hall_problem"
      >
        <h1>Monty Hall Problem</h1>
      </a>

      <p className="score">
        {`Prizes: `}
        <span className="wins">{`${wins}`}</span>
        {` Devourings: `}
        <span className="losses">{`${losses}`}</span>
        {` Win Rate: ${
          wins + losses === 0
            ? "0%"
            : ((wins / (wins + losses)) * 100).toFixed(2) + "%"
        }`}
      </p>

      <p className="log">{log}</p>

      <div className={`choice-chance choice-${choice.toString()}`}>
        <p>~33.3%</p>
      </div>

      <Door
        props={{
          doorNumber: 1,
          ...generalDoorProps,
        }}
      />
      <Door
        props={{
          doorNumber: 2,
          ...generalDoorProps,
        }}
      />
      <Door
        props={{
          doorNumber: 3,
          ...generalDoorProps,
        }}
      />

      <div className={`other-chance other-${choice}`}>
        <p>~66.6%</p>
      </div>

      <button
        className={`continue ${
          (choice === 0 || gameState === "switch") && "hidden"
        }`}
        disabled={choice === 0}
        onMouseDown={onContinue}
        onKeyDown={handleKeyDown}
      >
        Continue
      </button>
    </main>
  );
}

export default App;
