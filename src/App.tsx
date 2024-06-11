import { useState } from "react";
import "./App.css";
import Door from "./Door";

function App() {
  const [log, setLog] = useState<string>(
    "One door has a prize.\nTwo doors have a monster.\nChoose a door."
  );
  const [choice, setChoice] = useState<number>(0);

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
        <p>1/3 or ~33.3%</p>
      </div>

      <Door props={{ number: 1, setChoice }} />
      <Door props={{ number: 2, setChoice }} />
      <Door props={{ number: 3, setChoice }} />

      <div className="other-chance">
        <p>2/3 or ~66.6%</p>
      </div>
    </main>
  );
}

export default App;
