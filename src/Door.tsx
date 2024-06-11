const Door = ({
  props,
}: {
  props: {
    number: number;
    choice: number;
    setChoice: React.Dispatch<React.SetStateAction<number>>;
    setLog: React.Dispatch<React.SetStateAction<string>>;
  };
}) => {
  const { number, choice, setChoice, setLog } = props;

  const handleMouseDown = () => {
    setChoice(number);
    setLog(
      `Door #${number} has a 33% to have the prize.\nThere is a ~66.6% chance the prize is behind the other doors.`
    );
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      className={`door ${number !== choice && choice !== 0 ? "other" : ""}`}
      role="button"
    >
      <p>{`Door #${number}`}</p>
    </div>
  );
};

export default Door;
