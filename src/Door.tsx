const Door = ({
  props,
}: {
  props: {
    doorNumber: 1 | 2 | 3;
    choice: number;
    setChoice: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3>>;
    setPrize: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
    setLog: React.Dispatch<React.SetStateAction<string>>;
    openedDoor: 0 | 1 | 2 | 3;
    gameState: "choice" | "switch" | "result";
  };
}) => {
  const {
    doorNumber,
    choice,
    setChoice,
    setPrize,
    setLog,
    openedDoor,
    gameState,
  } = props;

  const handleMouseDown = () => {
    if (gameState !== "choice") return;
    setChoice(doorNumber);
    setPrize(Math.floor(Math.random() * 3 + 1) as 1 | 2 | 3);
    setLog(
      `Door #${doorNumber} has a 33% to have the prize.\nThere is a ~66.6% chance the prize is behind the other doors.`
    );
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
