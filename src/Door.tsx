const Door = ({
  props,
}: {
  props: {
    doorNumber: 1 | 2 | 3;
    choice: 0 | 1 | 2 | 3;
    setChoice: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3>>;
    prize: 1 | 2 | 3;
    setPrize: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
    setLog: React.Dispatch<React.SetStateAction<string>>;
    openedDoor: 0 | 1 | 2 | 3;
    gameState: "choice" | "switch" | "result";
    setGameState: React.Dispatch<
      React.SetStateAction<"choice" | "switch" | "result">
    >;
  };
}) => {
  const {
    doorNumber,
    choice,
    setChoice,
    prize,
    setPrize,
    setLog,
    openedDoor,
    gameState,
    setGameState,
  } = props;

  const handleMouseDown = () => {
    if (gameState === "choice") {
      setChoice(doorNumber);
      setPrize(Math.floor(Math.random() * 3 + 1) as 1 | 2 | 3);
      setLog(
        `Door #${doorNumber} has a 33% to have the prize.\nThere is a ~66.6% chance the prize is behind one of the other doors.`
      );
    } else if (gameState === "switch") {
      if (doorNumber === openedDoor) return;
      setGameState("result");
      let resultText = "";
      if (doorNumber === prize) {
        resultText =
          "You open the door and walk into the room...\n And you find the prize!\nCongratulations!";
      } else {
        resultText =
          "You open the door and walk into the room...\nYou don't even have time to scream before the beast devours you.";
      }
      setLog(resultText);
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      className={`door ${
        doorNumber !== choice && choice !== 0 ? "other" : ""
      } ${openedDoor === doorNumber ? "opened" : ""}`}
      role="button"
    >
      <p>{`Door #${doorNumber}`}</p>
    </div>
  );
};

export default Door;
