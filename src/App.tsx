import { useState } from "react";
import "./App.css";
import Door from "./Door";

function App() {
  const [log, setLog] = useState<string>(
    "One door has a prize.\nTwo doors have a monster.\nChoose a door."
  );

  return (
    <main className="main-content">
      <a
        className="title-header"
        href="https://en.wikipedia.org/wiki/Monty_Hall_problem"
      >
        <h1>Monty Hall Problem</h1>
      </a>

      <p className="log">{log}</p>

      <div className="choice-chance">
        <p>1/3 or ~33.3%</p>
      </div>

      <Door props={{ label: "A" }} />
      <Door props={{ label: "B" }} />
      <Door props={{ label: "C" }} />

      <div className="other-chance">
        <p>2/3 or ~66.6%</p>
      </div>
    </main>
  );
}

export default App;
