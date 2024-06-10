import { useState } from "react";
import "./App.css";

function App() {
  const [log, setLog] = useState<string>("");

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

      <div>Door</div>
      <div>Door</div>
      <div>Door</div>

      <div className="other-chance">
        <p>2/3 or ~66.6%</p>
      </div>
    </main>
  );
}

export default App;
