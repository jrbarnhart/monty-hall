const Door = ({
  props,
}: {
  props: {
    number: number;
    setChoice: React.Dispatch<React.SetStateAction<number>>;
    setLog: React.Dispatch<React.SetStateAction<string>>;
  };
}) => {
  const { number, setChoice, setLog } = props;

  const handleMouseDown = () => {
    setChoice(number);
    setLog(
      `Door #${number} has a 33% to have the prize.\nThere is a ~66.6% chance the prize is behind the other doors.`
    );
  };

  return (
    <div onMouseDown={handleMouseDown} className="door" role="button">
      <p>{`Door #${number}`}</p>
    </div>
  );
};

export default Door;
