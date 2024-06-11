import { useState } from "react";
import "./App.css";
import Door from "./Door";

function App() {
  const [log, setLog] = useState<string>(
    "One door has a prize.\nTwo doors have a monster.\nChoose a door."
  );
  const [choice, setChoice] = useState<number>(0);
  const [prize, setPrize] = useState<number>(Math.floor(Math.random() * 3 + 1));
  const [gameState, setGameState] = useState<"choice" | "switch" | "result">(
    "choice"
  );

  const onContinue = () => {
    if (choice === 0) return;
  };

  return (
    <main className="main-content">
      <a
        className="title-header"
        href="https://en.wikipedia.org/wiki/Monty_Hall_problem"
      >
        <h1>Monty Hall Problem</h1>
      </a>

      <p className="log">{log}</p>

      <div className={`choice-chance choice-${choice.toString()}`}>
        <p>~33.3%</p>
      </div>

      <Door
        props={{ number: 1, choice, setChoice, setPrize, setLog, gameState }}
      />
      <Door
        props={{ number: 2, choice, setChoice, setPrize, setLog, gameState }}
      />
      <Door
        props={{ number: 3, choice, setChoice, setPrize, setLog, gameState }}
      />

      <div className={`other-chance other-${choice}`}>
        <p>~66.6%</p>
      </div>

      <button
        className={`continue ${
          choice !== 0 || gameState !== "choice" ? "" : "hidden"
        }`}
        disabled={choice === 0}
        onMouseDown={onContinue}
      >
        Continue
      </button>
    </main>
  );
}

export default App;
